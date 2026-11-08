// Cennik: ceny podstawowe (promocje są na Instagramie).
// Kategorie i pozycje wyświetlają się w tej kolejności.
// Zdjęcia: pliki w public/… – ścieżka zaczyna się od "/images/…".

type Text = { pl: string; en: string };

export type PriceRow = { area: Text; count: number; price: string; description: Text };
export type PriceItem = { name: Text; rows: PriceRow[] };
export type PriceCategory = { id: string; title: Text; items: PriceItem[] };

export const PRICELIST: PriceCategory[] = [
  {
    id: "modelowanie_ust",
    title: {
      pl: "Modelowanie ust",
      en: "Lip Augmentation"
    },
    items: [
      {
        name: {
          pl: "Modelowanie ust",
          en: "Lip augmentation"
        },
        rows: [
          {
            area: {
              pl: "Usta",
              en: "Lips"
            },
            count: 1,
            price: "800 zł",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      }
    ]
  },
  {
    id: "usuwanie_kwasu",
    title: {
      pl: "Usuwanie kwasu hialuronowego",
      en: "Hyaluronic Acid Dissolving"
    },
    items: [
      {
        name: {
          pl: "Usuwanie kwasu hialuronowego",
          en: "Hyaluronic acid dissolving"
        },
        rows: [
          {
            area: {
              pl: "Usta",
              en: "Lips"
            },
            count: 1,
            price: "600–900 zł",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      }
    ]
  },
  {
    id: "wolumetria_twarzy",
    title: {
      pl: "Wolumetria twarzy",
      en: "Facial Volumisation"
    },
    items: [
      {
        name: {
          pl: "Modelowanie brody",
          en: "Chin augmentation"
        },
        rows: [
          {
            area: {
              pl: "Broda",
              en: "Chin"
            },
            count: 1,
            price: "700 zł",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      },
      {
        name: {
          pl: "Modelowanie żuchwy",
          en: "Jawline contouring"
        },
        rows: [
          {
            area: {
              pl: "Żuchwa (2–3 ml)",
              en: "Jawline (2–3 ml)"
            },
            count: 1,
            price: "1000–1400 zł",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      },
      {
        name: {
          pl: "Modelowanie policzków",
          en: "Cheek augmentation"
        },
        rows: [
          {
            area: {
              pl: "Policzki (2–3 ml)",
              en: "Cheeks (2–3 ml)"
            },
            count: 1,
            price: "1000–1400 zł",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      }
    ]
  },
  {
    id: "stymulatory_tkankowe",
    title: {
      pl: "Stymulatory tkankowe",
      en: "Tissue Stimulators"
    },
    items: [
      {
        name: {
          pl: "Okolice oka",
          en: "Eye area"
        },
        rows: [
          {
            area: {
              pl: "Okolice oka",
              en: "Eye area"
            },
            count: 1,
            price: "500–700 zł",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      },
      {
        name: {
          pl: "Skóra głowy",
          en: "Scalp"
        },
        rows: [
          {
            area: {
              pl: "Skóra głowy",
              en: "Scalp"
            },
            count: 1,
            price: "500–800 zł",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      },
      {
        name: {
          pl: "Owal twarzy",
          en: "Face contour"
        },
        rows: [
          {
            area: {
              pl: "Owal twarzy",
              en: "Face contour"
            },
            count: 1,
            price: "600–800 zł",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      }
    ]
  },
  {
    id: "pakiety_zabiegowe",
    title: {
      pl: "Pakiety zabiegowe",
      en: "Treatment Packages"
    },
    items: [
      {
        name: {
          pl: "Re-modeling ust + Usuwanie kwasu hialuronowego + Stymulator + Modelowanie",
          en: "Lip remodeling + Hyaluronic acid dissolving + Tissue stimulator + Lip augmentation"
        },
        rows: [
          {
            area: {
              pl: "Usta",
              en: "Lips"
            },
            count: 1,
            price: "1800 zł",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      },
      {
        name: {
          pl: "Modelowanie ust + Stymulator tkankowy",
          en: "Lip augmentation + Tissue stimulator"
        },
        rows: [
          {
            area: {
              pl: "",
              en: ""
            },
            count: 1,
            price: "-10%",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      },
      {
        name: {
          pl: "Stymulatory tkankowe seria 3 zabiegów",
          en: "Tissue stimulators – series of 3 treatments"
        },
        rows: [
          {
            area: {
              pl: "",
              en: ""
            },
            count: 1,
            price: "-15%",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      },
      {
        name: {
          pl: "Usuwanie kwasu hialuronowego + Modelowanie ust",
          en: "Hyaluronic acid dissolving + Lip augmentation"
        },
        rows: [
          {
            area: {
              pl: "",
              en: ""
            },
            count: 1,
            price: "-10%",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      },
      {
        name: {
          pl: "Modelowanie ust + Wolumetria brody",
          en: "Lip augmentation + Chin augmentation"
        },
        rows: [
          {
            area: {
              pl: "",
              en: ""
            },
            count: 1,
            price: "1300 zł",
            description: {
              pl: "",
              en: ""
            }
          }
        ]
      }
    ]
  }
];
