import type { DistrictNode, DivisionNode, ThanaNode } from "@/types/rental";

export const COUNTRY = "Bangladesh";

export const DIVISIONS: DivisionNode[] = [
  {
    name: "Dhaka",
    districts: [
      {
        name: "Dhaka",
        thanas: [
          {
            name: "Dhanmondi",
            areas: ["Road 2", "Road 7", "Road 15", "Kalabagan", "Jigatola"],
          },
          {
            name: "Gulshan",
            areas: ["Gulshan 1", "Gulshan 2", "Gulshan North", "Gulshan Avenue"],
          },
          {
            name: "Banani",
            areas: ["Banani 11", "Kamal Ataturk", "Banani DOHS"],
          },
          {
            name: "Mirpur",
            areas: ["Mirpur 1", "Mirpur 10", "Mirpur 11", "Pallabi", "Kazipara"],
          },
          {
            name: "Mohammadpur",
            areas: ["Shyamoli", "Town Hall", "Pc Culture", "Kaderabad"],
          },
          {
            name: "Uttara",
            areas: ["Sector 3", "Sector 7", "Sector 10", "Sector 13", "Diabari"],
          },
          {
            name: "Motijheel",
            areas: ["Shapla Chattar", "Dilkusha", "Fakirapool", "Arambagh"],
          },
          {
            name: "Badda",
            areas: ["Middle Badda", "North Badda", "Merul Badda", "Rampura"],
          },
        ],
      },
      {
        name: "Gazipur",
        thanas: [
          {
            name: "Gazipur Sadar",
            areas: ["Joydebpur", "Board Bazar", "Chandana"],
          },
          { name: "Tongi", areas: ["Tongi Bazar", "Ershad Nagar", "Millgate"] },
        ],
      },
      {
        name: "Narayanganj",
        thanas: [
          {
            name: "Narayanganj Sadar",
            areas: ["Chashara", "Fatullah", "Siddhirganj"],
          },
        ],
      },
    ],
  },
  {
    name: "Chattogram",
    districts: [
      {
        name: "Chattogram",
        thanas: [
          {
            name: "Panchlaish",
            areas: ["O.R. Nizam Road", "Khulshi Adjacent", "Nasirabad"],
          },
          {
            name: "Khulshi",
            areas: ["Khulshi Hills", "Lalkhan Bazar", "Probortak"],
          },
          {
            name: "Double Mooring",
            areas: ["Agrabad", "Port Connecting Road", "CDA Avenue"],
          },
          {
            name: "Halishahar",
            areas: ["Block A", "Block G", "Navy Colony"],
          },
        ],
      },
      {
        name: "Cox's Bazar",
        thanas: [
          {
            name: "Cox's Bazar Sadar",
            areas: ["Kolatoli", "Laboni", "Hotel Motel Zone"],
          },
        ],
      },
    ],
  },
  {
    name: "Rangpur",
    districts: [
      {
        name: "Thakurgaon",
        thanas: [
          {
            name: "Thakurgaon Sadar",
            areas: ["Boropalash", "Akcha", "Rahimanpur", "Gogor", "Jadurani"],
          },
          {
            name: "Pirganj",
            areas: ["Pirganj Bazar", "Bairchuna", "Khangaon"],
          },
          {
            name: "Baliadangi",
            areas: ["Baliadangi Bazar", "Duwasu", "Paria"],
          },
          {
            name: "Haripur",
            areas: ["Haripur Bazar", "Amgaon"],
          },
          {
            name: "Ranisankail",
            areas: ["Ranisankail Bazar", "Dharmagarh"],
          },
        ],
      },
      {
        name: "Rangpur",
        thanas: [
          {
            name: "Rangpur Sadar",
            areas: ["Modern More", "Medical College", "Shapla Chattar", "Jahaj Company"],
          },
          {
            name: "Mithapukur",
            areas: ["Mithapukur Bazar", "Pairaband"],
          },
          {
            name: "Badarganj",
            areas: ["Badarganj Bazar", "Lohani Para"],
          },
        ],
      },
      {
        name: "Dinajpur",
        thanas: [
          {
            name: "Dinajpur Sadar",
            areas: ["Balubari", "Chawk Bazar", "New Town"],
          },
        ],
      },
    ],
  },
  {
    name: "Sylhet",
    districts: [
      {
        name: "Sylhet",
        thanas: [
          {
            name: "Sylhet Sadar",
            areas: ["Zindabazar", "Amberkhana", "Chowhatta", "Bandar Bazar"],
          },
          {
            name: "Jalalabad",
            areas: ["Subid Bazar", "Tilagor", "Shahjalal Upashahar"],
          },
          {
            name: "South Surma",
            areas: ["Shahporan", "Khadimnagar"],
          },
        ],
      },
      {
        name: "Moulvibazar",
        thanas: [
          {
            name: "Moulvibazar Sadar",
            areas: ["Court Road", "Kusumbag"],
          },
        ],
      },
    ],
  },
  {
    name: "Khulna",
    districts: [
      {
        name: "Khulna",
        thanas: [
          {
            name: "Khulna Sadar",
            areas: ["Khalishpur", "Sonadanga", "Boyra"],
          },
          {
            name: "Sonadanga",
            areas: ["Nirala", "Moylapota", "Gollamari"],
          },
        ],
      },
    ],
  },
  {
    name: "Rajshahi",
    districts: [
      {
        name: "Rajshahi",
        thanas: [
          {
            name: "Boalia",
            areas: ["Shaheb Bazar", "Laxmipur", "New Market"],
          },
          {
            name: "Motihar",
            areas: ["RU Campus", "Binodpur", "Kazla"],
          },
        ],
      },
    ],
  },
  {
    name: "Barishal",
    districts: [
      {
        name: "Barishal",
        thanas: [
          {
            name: "Barishal Sadar",
            areas: ["Nathullabad", "Kawnia", "Rupatoli"],
          },
        ],
      },
    ],
  },
  {
    name: "Mymensingh",
    districts: [
      {
        name: "Mymensingh",
        thanas: [
          {
            name: "Mymensingh Sadar",
            areas: ["Ganginarpar", "CK Ghosh Road", "Town Hall"],
          },
        ],
      },
    ],
  },
];

export function findDivision(name: string | null): DivisionNode | undefined {
  if (!name) return undefined;
  return DIVISIONS.find((d) => d.name === name);
}

export function findDistrict(
  division: string | null,
  district: string | null,
): DistrictNode | undefined {
  if (!district) return undefined;
  return findDivision(division)?.districts.find((d) => d.name === district);
}

export function findThana(
  division: string | null,
  district: string | null,
  thana: string | null,
): ThanaNode | undefined {
  if (!thana) return undefined;
  return findDistrict(division, district)?.thanas.find((t) => t.name === thana);
}

export function locationLabel(parts: {
  thana?: string;
  district?: string;
  area?: string;
}): string {
  const bits = [parts.area, parts.thana, parts.district].filter(Boolean);
  return bits.join(", ");
}
