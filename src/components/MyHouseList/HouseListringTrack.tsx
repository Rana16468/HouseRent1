"use client";

import React, { useMemo, useState } from "react";
import { useGetLiveHouseListringTrackingQuery } from "@/lib/redux/features/postApi";
import {
  Building2,
  MapPin,
  ChevronRight,
  ChevronDown,
  Search,
  RefreshCw,
  Layers,
  Globe2,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import ErrorPage from "../ErrorPage/ErrorPage";
import { Header } from "../Header";

// ==========================================
// ১. TypeScript Types (API Response Structure)
// ==========================================

export interface IThanaData {
  thana: string;
  totalPosts: number;
}

export interface IDistrictData {
  district: string;
  totalPosts: number;
  thanas: IThanaData[];
}

export interface IDivisionData {
  division: string;
  totalPosts: number;
  districts: IDistrictData[];
}

export interface ITrackingApiResponse {
  success: boolean;
  message: string;
  data: IDivisionData[];
}

// ==========================================
// ২. ম্যাপ লেআউট ইঞ্জিন (কোনো lat/lng নেই)
// মার্কারের পজিশন সম্পূর্ণভাবে API ডাটার
// হায়ারার্কি (বিভাগ -> জেলা -> থানা) থেকেই হিসাব হয়।
// ==========================================

const CANVAS_W = 820;
const CANVAS_H = 620;
const CX = CANVAS_W / 2;
const CY = CANVAS_H / 2;
const PAD = 46;

type MarkerLevel = "division" | "district" | "thana";

interface IMarker {
  id: string;
  label: string;
  count: number;
  x: number;
  y: number;
  r: number;
  level: MarkerLevel;
  /** কানেক্টর লাইনের জন্য প্যারেন্ট পজিশন */
  px: number;
  py: number;
  divisionName: string;
  districtName?: string;
  dimmed: boolean;
}

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

/** পোস্ট সংখ্যার অনুপাতে ব্যাসার্ধ (area-proportional) */
const radiusFor = (count: number, max: number, min: number, span: number) => {
  if (max <= 0) return min;
  return min + span * Math.sqrt(Math.max(count, 0) / max);
};

/** ভলিউম অনুযায়ী কালার টোন */
const toneFor = (count: number, max: number) => {
  const ratio = max > 0 ? count / max : 0;
  if (count <= 0) return { fill: "#1e293b", stroke: "#334155", label: "None" };
  if (ratio < 0.2) return { fill: "rgba(16,185,129,0.22)", stroke: "#34d39977", label: "Low" };
  if (ratio < 0.55) return { fill: "rgba(16,185,129,0.45)", stroke: "#34d399aa", label: "Medium" };
  if (ratio < 0.85) return { fill: "rgba(16,185,129,0.70)", stroke: "#6ee7b7", label: "High" };
  return { fill: "#10b981", stroke: "#a7f3d0", label: "Max" };
};

function buildMarkers(
  divisions: IDivisionData[],
  selectedDivision: string | null,
  selectedDistrict: string | null
): IMarker[] {
  const markers: IMarker[] = [];
  const n = divisions.length;
  if (n === 0) return markers;

  const divMax = Math.max(...divisions.map((d) => d.totalPosts || 0), 1);

  // বিভাগগুলো একটি উপবৃত্তাকার রিং-এ বসে, পোস্ট সংখ্যা অনুযায়ী সাজানো
  const ordered = [...divisions].sort((a, b) => b.totalPosts - a.totalPosts);
  const rx = n === 1 ? 0 : CANVAS_W * 0.3;
  const ry = n === 1 ? 0 : CANVAS_H * 0.29;

  ordered.forEach((div, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const dx = clamp(CX + rx * Math.cos(angle), PAD + 30, CANVAS_W - PAD - 30);
    const dy = clamp(CY + ry * Math.sin(angle), PAD + 30, CANVAS_H - PAD - 30);
    const isActive = selectedDivision === div.division;

    markers.push({
      id: `div:${div.division}`,
      label: div.division,
      count: div.totalPosts || 0,
      x: dx,
      y: dy,
      r: radiusFor(div.totalPosts || 0, divMax, 20, 30),
      level: "division",
      px: CX,
      py: CY,
      divisionName: div.division,
      dimmed: !!selectedDivision && !isActive,
    });

    if (!isActive) return;

    // নির্বাচিত বিভাগের জেলাগুলো তার চারপাশে রিং আকারে
    const dists = div.districts || [];
    const dMax = Math.max(...dists.map((d) => d.totalPosts || 0), 1);
    const dRing = clamp(78 + dists.length * 7, 90, 155);

    dists.forEach((dist, j) => {
      const a = (j / Math.max(dists.length, 1)) * Math.PI * 2 - Math.PI / 2;
      const x = clamp(dx + dRing * Math.cos(a), PAD, CANVAS_W - PAD);
      const y = clamp(dy + dRing * 0.78 * Math.sin(a), PAD, CANVAS_H - PAD);
      const distActive = selectedDistrict === dist.district;

      markers.push({
        id: `dist:${div.division}:${dist.district}`,
        label: dist.district,
        count: dist.totalPosts || 0,
        x,
        y,
        r: radiusFor(dist.totalPosts || 0, dMax, 13, 17),
        level: "district",
        px: dx,
        py: dy,
        divisionName: div.division,
        districtName: dist.district,
        dimmed: !!selectedDistrict && !distActive,
      });

      if (!distActive) return;

      // নির্বাচিত জেলার থানাগুলো
      const thanas = dist.thanas || [];
      const tMax = Math.max(...thanas.map((t) => t.totalPosts || 0), 1);
      const tRing = clamp(44 + thanas.length * 3, 46, 78);

      thanas.forEach((th, k) => {
        const ta = (k / Math.max(thanas.length, 1)) * Math.PI * 2 - Math.PI / 2;
        markers.push({
          id: `thana:${dist.district}:${th.thana}:${k}`,
          label: th.thana,
          count: th.totalPosts || 0,
          x: clamp(x + tRing * Math.cos(ta), PAD, CANVAS_W - PAD),
          y: clamp(y + tRing * 0.82 * Math.sin(ta), PAD, CANVAS_H - PAD),
          r: radiusFor(th.totalPosts || 0, tMax, 8, 10),
          level: "thana",
          px: x,
          py: y,
          divisionName: div.division,
          districtName: dist.district,
          dimmed: false,
        });
      });
    });
  });

  return markers;
}

// ==========================================
// ৩. মূল React Component
// ==========================================

const HouseListingTrack: React.FC = () => {
  const { data, isLoading, isError, error, refetch } =
    useGetLiveHouseListringTrackingQuery({});

  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [expandedDivisions, setExpandedDivisions] = useState<Record<string, boolean>>({});
  const [expandedDistricts, setExpandedDistricts] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hovered, setHovered] = useState<IMarker | null>(null);
  const [zoom, setZoom] = useState<number>(1);

  const apiResponse = data as ITrackingApiResponse | undefined;
  const rawData: IDivisionData[] = apiResponse?.data || [];

  const grandTotalPosts = rawData.reduce(
    (acc: number, curr: IDivisionData) => acc + (curr.totalPosts || 0),
    0
  );

  const toggleDivision = (divName: string) =>
    setExpandedDivisions((prev) => ({ ...prev, [divName]: !prev[divName] }));

  const toggleDistrict = (distName: string) =>
    setExpandedDistricts((prev) => ({ ...prev, [distName]: !prev[distName] }));

  // সার্চ ফিল্টার
  const filteredData = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return rawData;

    return rawData
      .map((div) => {
        const matchesDiv = div.division.toLowerCase().includes(q);
        const districts = (div.districts || [])
          .map((dist) => {
            const matchesDist = dist.district.toLowerCase().includes(q);
            const thanas = (dist.thanas || []).filter((th) =>
              th.thana.toLowerCase().includes(q)
            );
            if (matchesDist) return dist;
            if (thanas.length > 0) return { ...dist, thanas };
            return null;
          })
          .filter((d): d is IDistrictData => d !== null);

        if (matchesDiv) return div;
        if (districts.length > 0) return { ...div, districts };
        return null;
      })
      .filter((d): d is IDivisionData => d !== null);
  }, [rawData, searchQuery]);

  // ম্যাপে সার্চের ফলাফলই দেখানো হয়, যাতে ম্যাপ ও ট্রি ভিউ একই ডাটা দেখায়
  const markers = useMemo(
    () => buildMarkers(filteredData, selectedDivision, selectedDistrict),
    [filteredData, selectedDivision, selectedDistrict]
  );

  const activeDivisionData = filteredData.find((d) => d.division === selectedDivision);
  const activeDistrictData = activeDivisionData?.districts?.find(
    (d) => d.district === selectedDistrict
  );

  const divisionMax = Math.max(...filteredData.map((d) => d.totalPosts || 0), 1);

  // ---------- লোডিং ----------
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-950 text-white rounded-3xl border border-slate-800 p-8">
        <RefreshCw className="w-10 h-10 text-emerald-400 animate-spin mb-4" />
        <p className="text-slate-300 font-medium text-sm">লাইভ হাউজিং ডাটা লোড হচ্ছে...</p>
      </div>
    );
  }

  // ---------- এরর ----------
  if (isError && error) {
     return <ErrorPage error={error}/>
  }

  return (
   <>
   <Header/>
    <div className="w-full bg-slate-950 text-slate-100  p-4 sm:p-6 lg:p-8 border border-slate-800 shadow-2xl space-y-6">
      {/* হেডার */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Realtime Live API Mapping
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Globe2 className="w-8 h-8 text-emerald-400" />
            বাংলাদেশ হাউজিং লিস্টিং ম্যাপ
          </h2>
        </div>

        <div className="flex items-center gap-4 bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl">
          <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">সক্রিয় পোস্ট সংখ্যা</p>
            <p className="text-2xl font-extrabold text-white">
              {grandTotalPosts} <span className="text-xs font-normal text-slate-400">টি</span>
            </p>
          </div>
        </div>
      </div>

      {/* সার্চ ও রিফ্রেশ */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="বিভাগ, জেলা বা থানা দিয়ে খুঁজুন..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all"
          />
        </div>

        <button
          onClick={() => refetch()}
          className="w-full sm:w-auto px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-4 h-4 text-emerald-400" />
          ডাটা রিফ্রেশ করুন
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ================= বাম পাশ: কাস্টম ম্যাপ ================= */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-base font-semibold text-slate-200 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-400" />
              লিস্টিং বিতরণ ম্যাপ
            </h3>
            <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full font-medium">
              {filteredData.length} টি বিভাগ সক্রিয়
            </span>
          </div>

          <div className="relative rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden">
            {/* জুম কন্ট্রোল */}
            <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
              {[
                { icon: ZoomIn, action: () => setZoom((z) => clamp(z + 0.2, 0.6, 2.2)), label: "জুম ইন" },
                { icon: ZoomOut, action: () => setZoom((z) => clamp(z - 0.2, 0.6, 2.2)), label: "জুম আউট" },
                { icon: RotateCcw, action: () => { setZoom(1); setSelectedDivision(null); setSelectedDistrict(null); }, label: "রিসেট" },
              ].map(({ icon: Icon, action, label }) => (
                <button
                  key={label}
                  onClick={action}
                  aria-label={label}
                  className="w-8 h-8 grid place-items-center rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>

            {/* সর্বোচ্চ শেয়ার ব্যাজ */}
            <div className="absolute right-3 top-3 z-10 text-[11px] text-slate-400 bg-slate-900/90 border border-slate-800 px-2 py-1 rounded-lg">
              {grandTotalPosts > 0 && filteredData.length > 0
                ? `${Math.round((divisionMax / grandTotalPosts) * 100)}% সর্বোচ্চ`
                : "০%"}
            </div>

            <svg
              viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
              className="w-full h-auto block"
              role="img"
              aria-label="বিভাগ, জেলা ও থানা অনুযায়ী পোস্ট বিতরণ"
            >
              <defs>
                <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M48 0H0V48" fill="none" stroke="#1e293b" strokeWidth="1" />
                </pattern>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect width={CANVAS_W} height={CANVAS_H} fill="url(#grid)" />
              <circle cx={CX} cy={CY} r={250} fill="url(#glow)" />

              <g
                transform={`translate(${CX - CX * zoom} ${CY - CY * zoom}) scale(${zoom})`}
              >
                {/* কেন্দ্র: সারাদেশ */}
                <circle cx={CX} cy={CY} r={5} fill="#10b981" opacity={0.5} />
                <text
                  x={CX}
                  y={CY + 20}
                  textAnchor="middle"
                  className="fill-slate-600"
                  fontSize="11"
                  letterSpacing="3"
                >
                  BANGLADESH
                </text>

                {/* কানেক্টর লাইন */}
                {markers.map((m) => (
                  <line
                    key={`line-${m.id}`}
                    x1={m.px}
                    y1={m.py}
                    x2={m.x}
                    y2={m.y}
                    stroke={m.level === "division" ? "#1e293b" : "#065f46"}
                    strokeWidth={m.level === "thana" ? 0.8 : 1.2}
                    strokeDasharray={m.level === "division" ? "4 5" : "0"}
                    opacity={m.dimmed ? 0.15 : 0.7}
                  />
                ))}

                {/* মার্কার */}
                {markers.map((m) => {
                  const max =
                    m.level === "division"
                      ? divisionMax
                      : m.level === "district"
                      ? Math.max(
                          ...(activeDivisionData?.districts || []).map((d) => d.totalPosts),
                          1
                        )
                      : Math.max(
                          ...(activeDistrictData?.thanas || []).map((t) => t.totalPosts),
                          1
                        );
                  const tone = toneFor(m.count, max);
                  const isSelected =
                    (m.level === "division" && m.label === selectedDivision) ||
                    (m.level === "district" && m.label === selectedDistrict);

                  return (
                    <g
                      key={m.id}
                      opacity={m.dimmed ? 0.3 : 1}
                      className="cursor-pointer"
                      onMouseEnter={() => setHovered(m)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => {
                        if (m.level === "division") {
                          setSelectedDivision((prev) => (prev === m.label ? null : m.label));
                          setSelectedDistrict(null);
                        } else if (m.level === "district") {
                          setSelectedDistrict((prev) => (prev === m.label ? null : m.label));
                        }
                      }}
                    >
                      {isSelected && (
                        <circle
                          cx={m.x}
                          cy={m.y}
                          r={m.r + 10}
                          fill="none"
                          stroke="#34d399"
                          strokeWidth="1.5"
                          opacity="0.5"
                        />
                      )}

                      <circle
                        cx={m.x}
                        cy={m.y}
                        r={m.r}
                        fill={tone.fill}
                        stroke={tone.stroke}
                        strokeWidth={isSelected ? 2.5 : 1.5}
                      />

                      {m.r >= 13 && (
                        <text
                          x={m.x}
                          y={m.y + 4}
                          textAnchor="middle"
                          fontSize={m.level === "division" ? 13 : 11}
                          fontWeight="700"
                          fill="#ecfdf5"
                        >
                          {m.count}
                        </text>
                      )}

                      <text
                        x={m.x}
                        y={m.y + m.r + 13}
                        textAnchor="middle"
                        fontSize={m.level === "division" ? 12 : 10}
                        fontWeight={m.level === "division" ? 600 : 400}
                        fill={m.level === "division" ? "#e2e8f0" : "#94a3b8"}
                      >
                        {m.label}
                      </text>
                    </g>
                  );
                })}
              </g>

              {filteredData.length === 0 && (
                <text
                  x={CX}
                  y={CY}
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="14"
                >
                  এই সার্চে ম্যাপে দেখানোর মতো কোনো ডাটা নেই।
                </text>
              )}
            </svg>

            {/* হোভার টুলটিপ */}
            {hovered && (
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-slate-900 border border-emerald-500/30 rounded-xl px-3 py-2 text-xs shadow-xl pointer-events-none">
                <span className="font-semibold text-white">{hovered.label}</span>
                <span className="text-slate-400">
                  {" "}
                  · {hovered.level === "division" ? "বিভাগ" : hovered.level === "district" ? "জেলা" : "থানা"}
                </span>
                <span className="text-emerald-400 font-bold"> · {hovered.count} পোস্ট</span>
              </div>
            )}

            {/* লেজেন্ড */}
            <div className="flex flex-wrap items-center gap-3 px-4 py-2.5 border-t border-slate-800 bg-slate-900/60 text-[11px] text-slate-400">
              <span className="text-slate-300 font-medium">ভলিউম:</span>
              {[
                { c: "#1e293b", t: "None" },
                { c: "rgba(16,185,129,0.22)", t: "Low" },
                { c: "rgba(16,185,129,0.45)", t: "Medium" },
                { c: "rgba(16,185,129,0.70)", t: "High" },
                { c: "#10b981", t: "Max" },
              ].map((l) => (
                <span key={l.t} className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-slate-700"
                    style={{ background: l.c }}
                  />
                  {l.t}
                </span>
              ))}
              <span className="ml-auto">বৃত্তের আকার = পোস্ট সংখ্যা · ক্লিক করলে জেলা ও থানা খুলবে</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              মার্কারের অবস্থান শুধু API-এর বিভাগ → জেলা → থানা কাঠামো থেকেই হিসাব হয়। কোনো
              latitude/longitude বা ডেমো ডাটা ব্যবহার করা হয়নি, তাই API বদলালে ম্যাপও নিজে থেকেই বদলাবে।
            </span>
          </div>
        </div>

        {/* ================= ডান পাশ: বিস্তারিত ================= */}
        <div className="lg:col-span-5 space-y-4">
          {/* নির্বাচিত বিভাগের সারাংশ */}
          {activeDivisionData && (
            <div className="bg-slate-900/60 border border-emerald-500/30 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{activeDivisionData.division}</h3>
                <button
                  onClick={() => {
                    setSelectedDivision(null);
                    setSelectedDistrict(null);
                  }}
                  className="text-slate-400 hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: activeDivisionData.totalPosts, l: "মোট পোস্ট" },
                  { v: activeDivisionData.districts?.length || 0, l: "জেলা" },
                  {
                    v: (activeDivisionData.districts || []).reduce(
                      (a, d) => a + (d.thanas?.length || 0),
                      0
                    ),
                    l: "থানা",
                  },
                  {
                    v:
                      grandTotalPosts > 0
                        ? `${Math.round((activeDivisionData.totalPosts / grandTotalPosts) * 100)}%`
                        : "০%",
                    l: "সারাদেশের অংশ",
                  },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="bg-slate-950/70 border border-slate-800 rounded-xl px-3 py-2.5"
                  >
                    <p className="text-xl font-bold text-white">{s.v}</p>
                    <p className="text-[11px] text-slate-400">{s.l}</p>
                  </div>
                ))}
              </div>

              {activeDistrictData && (
                <div className="border-t border-slate-800 pt-3">
                  <p className="text-xs font-semibold text-emerald-400 mb-2">
                    {activeDistrictData.district} জেলার থানা ভাগ
                  </p>
                  <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
                    {activeDistrictData.thanas?.map((th, i) => (
                      <div
                        key={`${th.thana}-${i}`}
                        className="flex items-center justify-between text-xs bg-slate-950/60 border border-slate-800 rounded-lg px-2.5 py-1.5"
                      >
                        <span className="text-slate-300">{th.thana}</span>
                        <span className="text-emerald-400 font-bold">{th.totalPosts}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ট্রি ভিউ */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5">
            <h3 className="text-base font-semibold text-slate-200 mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Layers className="w-4 h-4 text-emerald-400" />
              বিভাগ, জেলা ও থানার ট্রি ভিউ
            </h3>

            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {filteredData.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-sm">
                  কোনো সম্পর্কিত ফলাফল পাওয়া যায়নি।
                </div>
              ) : (
                filteredData.map((divData) => {
                  const isDivExpanded = expandedDivisions[divData.division];
                  return (
                    <div
                      key={divData.division}
                      className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
                    >
                      <div
                        onClick={() => toggleDivision(divData.division)}
                        className="flex items-center justify-between p-3.5 cursor-pointer hover:bg-slate-800/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {isDivExpanded ? (
                            <ChevronDown className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          )}
                          <span className="font-semibold text-white text-sm">
                            {divData.division} বিভাগ
                          </span>
                        </div>
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-2.5 py-1 rounded-full font-bold">
                          {divData.totalPosts} টি পোস্ট
                        </span>
                      </div>

                      {isDivExpanded && (
                        <div className="bg-slate-950/60 border-t border-slate-800 p-3 pl-6 space-y-2">
                          {divData.districts?.map((distData) => {
                            const isDistExpanded = expandedDistricts[distData.district];
                            return (
                              <div
                                key={distData.district}
                                className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden"
                              >
                                <div
                                  onClick={() => toggleDistrict(distData.district)}
                                  className="flex items-center justify-between p-2.5 cursor-pointer hover:bg-slate-800/70 transition-colors"
                                >
                                  <div className="flex items-center gap-2">
                                    {isDistExpanded ? (
                                      <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
                                    ) : (
                                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                                    )}
                                    <span className="font-medium text-slate-200 text-xs">
                                      {distData.district} জেলা
                                    </span>
                                  </div>
                                  <span className="bg-slate-800 text-slate-300 text-[11px] px-2 py-0.5 rounded-full font-medium">
                                    {distData.totalPosts}
                                  </span>
                                </div>

                                {isDistExpanded && (
                                  <div className="bg-slate-950/80 border-t border-slate-800 p-2 pl-6 space-y-1">
                                    {distData.thanas?.map((thanaData, idx) => (
                                      <div
                                        key={`${thanaData.thana}-${idx}`}
                                        className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-slate-800/40 text-xs transition-colors"
                                      >
                                        <div className="flex items-center gap-2 text-slate-300">
                                          <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                                          <span>{thanaData.thana}</span>
                                        </div>
                                        <span className="font-bold text-emerald-400">
                                          {thanaData.totalPosts} পোস্ট
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
   
   </>
  );
};

export default HouseListingTrack;