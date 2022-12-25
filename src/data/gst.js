// for primary industry
export const primaryIndustry = [
  {
    value: "Agri and Food",
    secondary: [
      {
        value: "Beer and Wine & Distilled Alcholic Beverages",
        type: "red",
        ccScore: 10,
      },
      {
        value: "Tractors",
        type: "red",
        ccScore: 10,
      },
      {
        value: "Bottled Water",
        type: "green",
        ccScore: 20,
      },
    ],
  },
  {
    value: "Automobile",
    secondary: [
      {
        value: "Two and three Wheeler",
        type: "red",
        ccScore: 10,
      },
      {
        value: "Tractors",
        type: "red",
        ccScore: 10,
      },
      {
        value: "Bottled Water",
        type: "green",
        ccScore: 20,
      },
    ],
  },
];

//  for secondary industry
export const secondaryIndustry = [
  {
    value: "Construction",
    secondary: [
      {
        value: "Searmic Tiles and Industries",
        type: "amber",
        ccScore: 10,
      },
      {
        value: "Tractors",
        type: "red",
        ccScore: 0,
      },
    ],
  },
  {
    value: "Energy",
    secondary: [
      {
        value: "Refineries",
        type: "amber",
        ccScore: 10,
      },
    ],
  },
];

export const bcvMergedData = [
  { value: "publiclimiteddirector2", category: "B", ccScore: 30 },
  { value: "publiclimiteddirector1", category: "D", ccScore: 20 },
  { value: "patnerpatner0", category: "D", ccScore: 20 },
  { value: "patnerrelativeofpatner0", category: "C", ccScore: 30 },
  { value: "privatelimitedcompanydirector2", category: "B", ccScore: 30 },
  { value: "privatelimitedcompanydirector1", category: "D", ccScore: 20 },
  {
    value: "privatelimitedcompanydirectorandshareholder0",
    category: "E",
    ccScore: 10,
  },
  { value: "proprietorshiprelativeofpartner0", category: "E", ccScore: 10 },
  { value: "proprietorshipproprietor1", category: "A", ccScore: 30 },
  { value: "proprietorshipproprietor2", category: "A", ccScore: 30 },
  { value: "proprietorshipproprietor0", category: "E", ccScore: 10 },
  { value: "publiclimiteddirector2", category: "B", ccScore: 30 },
  { value: "publiclimiteddirector1", category: "D", ccScore: 20 },
  {
    value: "publiclimitedrelativeofdirector/shareholder0",
    category: "E",
    ccScore: 10,
  },
];

export const addressMergedData = [
  { value: "permanentselfownedgodown/factory", ccScore: 50 },
  { value: "currentselfownedgodown/factory", ccScore: 0 },
  { value: "permanentselfownedpromotersresidenceaddress", ccScore: 30 },
  { value: "currentselfownedpromotersresidenceaddress", ccScore: 0 },
];
