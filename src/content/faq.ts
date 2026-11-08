// Najczęściej zadawane pytania (w tej kolejności).
// treatment = slug zabiegu z src/content/treatments.ts.
// Zdjęcia: pliki w public/… – ścieżka zaczyna się od "/images/…".

type Text = { pl: string; en: string };

export type FaqEntry = { treatment: string; question: Text; answer: Text };

export const FAQ: FaqEntry[] = [
  {
    treatment: "usuwanie-kwasu-hialuronowego",
    question: {
      pl: "Czym jest hialuronidaza?",
      en: "What is hyaluronidase?"
    },
    answer: {
      pl: "Hialuronidaza to enzym, który rozkłada kwas hialuronowy. Wykorzystuje się ją do rozpuszczania wypełniaczy zawierających kwas hialuronowy, m.in. w przypadku konieczności korekty wcześniejszego zabiegu.",
      en: "Hyaluronidase is an enzyme that breaks down hyaluronic acid. It is used to dissolve hyaluronic acid-based dermal fillers, including when correction of a previous treatment is necessary."
    }
  },
  {
    treatment: "wolumetria-katow-zuchwy",
    question: {
      pl: "Czy wolumetria żuchwy mocno zmienia twarz?",
      en: "Does jawline filler treatment significantly change the appearance of the face?"
    },
    answer: {
      pl: "Efekt zależy od ilości preparatu, techniki oraz indywidualnej budowy twarzy. Zabieg może być wykonany subtelnie, aby jedynie podkreślić naturalny kontur.",
      en: "The results depend on the amount of product used, the technique, and the individual's facial structure. The treatment can be performed subtly to enhance the natural jawline without significantly changing the overall appearance of the face."
    }
  },
  {
    treatment: "wolumetria-policzkow",
    question: {
      pl: "Czy wolumetria policzków daje efekt „napompowanej” twarzy?",
      en: "Does cheek augmentation create an “overfilled” look?"
    },
    answer: {
      pl: "Nie musi. Odpowiednio zaplanowany zabieg ma przede wszystkim przywrócić lub podkreślić objętość w miejscach, które tego wymagają. Ilość preparatu dobierana jest indywidualnie.",
      en: "Not necessarily. A well-planned treatment is primarily intended to restore or enhance volume in areas where it is needed. The amount of product used is tailored to each individual."
    }
  },
  {
    treatment: "wolumetria-brody",
    question: {
      pl: "Czy wolumetria brody zmienia kształt twarzy?",
      en: "Does chin augmentation change the shape of the face?"
    },
    answer: {
      pl: "Może delikatnie wpłynąć na proporcje i optyczny kształt twarzy, dlatego zabieg powinien być planowany indywidualnie. Celem jest harmonizacja rysów, a nie ich całkowita zmiana.",
      en: "It may subtly affect facial proportions and the perceived shape of the face, which is why the treatment should be planned individually. The aim is to harmonise facial features rather than change them completely."
    }
  },
  {
    treatment: "stymulatory-tkankowe",
    question: {
      pl: "Czym są stymulatory tkankowe?",
      en: "What are tissue stimulators?"
    },
    answer: {
      pl: "To preparaty, których zadaniem jest przede wszystkim poprawa jakości skóry i pobudzenie jej naturalnych procesów regeneracyjnych. W zależności od preparatu mogą wspierać produkcję kolagenu i poprawiać jędrność oraz elastyczność skóry.",
      en: "These are products primarily designed to improve skin quality and stimulate its natural regenerative processes. Depending on the product used, they may support collagen production and improve skin firmness and elasticity."
    }
  },
  {
    treatment: "modelowanie-ust",
    question: {
      pl: "Czy modelowanie ust boli?",
      en: "Does lip augmentation hurt?"
    },
    answer: {
      pl: "Zabieg może powodować niewielki dyskomfort, jednak stosowane preparaty zawierają środek znieczulający, a przed zabiegiem stosujemy dodatkowo znieczulenie miejscowe w kremie. Większość Pań ocenia ten zabieg jako chwilowy dyskomfort.",
      en: "The treatment may cause some mild discomfort. However, the products used contain a local anesthetic, and we also apply a topical numbing cream before the procedure. Most patients describe the treatment as causing only temporary discomfort."
    }
  },
  {
    treatment: "usuwanie-kwasu-hialuronowego",
    question: {
      pl: "Czy hialuronidaza całkowicie rozpuszcza kwas hialuronowy?",
      en: "Does hyaluronidase completely dissolve hyaluronic acid?"
    },
    answer: {
      pl: "Skuteczność zabiegu zależy m.in. od rodzaju i ilości preparatu, jego właściwości oraz czasu, jaki upłynął od podania. W niektórych przypadkach konieczne może być ponowne podanie enzymu. Nie zawsze możliwe jest całkowite usunięcie wypełniacza podczas jednej wizyty.",
      en: "The effectiveness of the treatment depends on several factors, including the type and amount of product used, its properties, and how much time has passed since it was injected. In some cases, another application of the enzyme may be necessary. It is not always possible to completely dissolve the filler in a single session."
    }
  },
  {
    treatment: "wolumetria-katow-zuchwy",
    question: {
      pl: "Czy zabieg jest bolesny?",
      en: "Is the treatment painful?"
    },
    answer: {
      pl: "Może wystąpić niewielki dyskomfort, jednak stosowane metody znieczulenia pozwalają ograniczyć odczuwanie bólu.",
      en: "Mild discomfort may occur, but the anaesthetic methods used help minimise pain."
    }
  },
  {
    treatment: "wolumetria-policzkow",
    question: {
      pl: "Czy zabieg może wysmuklić twarz?",
      en: "Can the treatment make the face look slimmer?"
    },
    answer: {
      pl: "Odpowiednie podkreślenie kości policzkowych może optycznie poprawić proporcje twarzy i wpłynąć na jej kontur. Nie jest to jednak zabieg odchudzający twarz.",
      en: "Enhancing the cheekbones appropriately can visually improve facial proportions and define the facial contours. However, this is not a facial slimming treatment."
    }
  },
  {
    treatment: "wolumetria-brody",
    question: {
      pl: "Czy zabieg jest bolesny?",
      en: "Is the treatment painful?"
    },
    answer: {
      pl: "Może pojawić się niewielki dyskomfort, jednak stosowane preparaty oraz odpowiednie techniki pozwalają ograniczyć odczuwanie bólu.",
      en: "Mild discomfort may occur, but the products used and appropriate techniques help minimise pain."
    }
  },
  {
    treatment: "stymulatory-tkankowe",
    question: {
      pl: "Czy stymulator tkankowy działa jak wypełniacz?",
      en: "Do tissue stimulators work like dermal fillers?"
    },
    answer: {
      pl: "Nie każdy stymulator ma za zadanie zwiększać objętość tkanek. Terapia skupia się przede wszystkim na poprawie jakości skóry, a dobór preparatu zależy od potrzeb konkretnej okolicy.",
      en: "Not all tissue stimulators are intended to increase tissue volume. The treatment focuses primarily on improving skin quality, and the choice of product depends on the needs of the specific area being treated."
    }
  },
  {
    treatment: "modelowanie-ust",
    question: {
      pl: "Jak długo utrzymuje się efekt?",
      en: "How long do the results last?"
    },
    answer: {
      pl: "Efekt jest indywidualny i zależy m.in. od zastosowanego preparatu, metabolizmu organizmu, stylu życia oraz wcześniejszych zabiegów. Zazwyczaj utrzymuje się przez kilka do kilkunastu miesięcy.",
      en: "The results vary from person to person and depend on several factors, including the product used, individual metabolism, lifestyle, and previous treatments. The effects typically last from several months to over a year."
    }
  },
  {
    treatment: "usuwanie-kwasu-hialuronowego",
    question: {
      pl: "Czy zabieg jest bolesny?",
      en: "Is the treatment painful?"
    },
    answer: {
      pl: "Podczas podawania preparatu może pojawić się pieczenie, szczypanie lub niewielki dyskomfort. Odczucia są indywidualne i zależą m.in. od wrażliwości danej okolicy.",
      en: "A burning sensation, stinging, or mild discomfort may occur during the injection. The experience varies from person to person and depends, among other things, on the sensitivity of the treated area."
    }
  },
  {
    treatment: "wolumetria-katow-zuchwy",
    question: {
      pl: "Czy po zabiegu pojawia się obrzęk?",
      en: "Does swelling occur after the treatment?"
    },
    answer: {
      pl: "Tak, niewielki obrzęk, tkliwość lub zasinienie są możliwe. Zwykle mają charakter przejściowy.",
      en: "Yes. Mild swelling, tenderness, or bruising may occur. These reactions are usually temporary."
    }
  },
  {
    treatment: "wolumetria-policzkow",
    question: {
      pl: "Kiedy widoczny jest efekt końcowy?",
      en: "When will I see the final results?"
    },
    answer: {
      pl: "Efekt jest widoczny bezpośrednio po zabiegu, jednak ze względu na możliwy obrzęk ostateczny rezultat oceniamy po pełnym wygojeniu.",
      en: "The results are visible immediately after the treatment. However, due to possible swelling, the final outcome is assessed once the healing process is complete."
    }
  },
  {
    treatment: "wolumetria-brody",
    question: {
      pl: "Jak długo utrzymuje się efekt?",
      en: "How long do the results last?"
    },
    answer: {
      pl: "Trwałość jest indywidualna i zależy m.in. od rodzaju preparatu, miejsca podania oraz metabolizmu organizmu.",
      en: "The longevity of the results varies from person to person and depends on several factors, including the type of product used, the injection site, and individual metabolism."
    }
  },
  {
    treatment: "stymulatory-tkankowe",
    question: {
      pl: "Kiedy pojawiają się efekty?",
      en: "When do the results appear?"
    },
    answer: {
      pl: "fekty pojawiają się stopniowo. Skóra może wyglądać lepiej już po pewnym czasie od zabiegu, natomiast procesy przebudowy tkanek zachodzą przez kolejne tygodnie.",
      en: "The results develop gradually. The skin may begin to look better some time after the treatment, while the tissue remodelling processes continue over the following weeks."
    }
  },
  {
    treatment: "modelowanie-ust",
    question: {
      pl: "Czy po zabiegu usta będą bardzo spuchnięte?",
      en: "Will my lips be very swollen after the treatment?"
    },
    answer: {
      pl: "Obrzęk jest naturalną reakcją organizmu. Najczęściej jest najbardziej widoczny w pierwszych dniach po zabiegu i stopniowo się zmniejsza. Ostateczny efekt oceniamy dopiero po wygojeniu.",
      en: "Swelling is a natural response of the body. It is usually most noticeable during the first few days after the treatment and gradually subsides. The final result can only be assessed once the healing process is complete."
    }
  },
  {
    treatment: "usuwanie-kwasu-hialuronowego",
    question: {
      pl: "Kiedy widoczne są efekty?",
      en: "When do the results become visible?"
    },
    answer: {
      pl: "Pierwsze zmiany mogą być zauważalne już w ciągu kilku godzin, jednak na ostateczny efekt wpływają również obrzęk i indywidualna reakcja organizmu. Pełną ocenę rezultatu przeprowadza się po ustąpieniu reakcji pozabiegowych.",
      en: "The first changes may be noticeable within a few hours. However, swelling and the body's individual response can also affect the outcome. The final results are assessed once post-treatment reactions have subsided."
    }
  },
  {
    treatment: "wolumetria-katow-zuchwy",
    question: {
      pl: "Czy efekt jest widoczny od razu?",
      en: "Are the results visible immediately?"
    },
    answer: {
      pl: "Kontur może być zauważalny bezpośrednio po zabiegu, jednak ostateczny efekt oceniamy po ustąpieniu obrzęku i pełnym wygojeniu tkanek.",
      en: "The jawline contour may be noticeable immediately after the treatment. However, the final results are assessed once the swelling has subsided and the tissues have fully healed."
    }
  },
  {
    treatment: "wolumetria-policzkow",
    question: {
      pl: "Jak długo utrzymuje się efekt?",
      en: "How long do the results last?"
    },
    answer: {
      pl: "Trwałość zależy od wielu czynników, m.in. rodzaju preparatu, indywidualnego metabolizmu i miejsca podania.",
      en: "The longevity of the results depends on several factors, including the type of product used, individual metabolism, and the injection site."
    }
  },
  {
    treatment: "wolumetria-brody",
    question: {
      pl: "Czy po zabiegu broda będzie spuchnięta?",
      en: "Will my chin be swollen after the treatment?"
    },
    answer: {
      pl: "Możliwy jest przejściowy obrzęk, tkliwość lub niewielkie zasinienie. Reakcje te zwykle stopniowo ustępują.",
      en: "Temporary swelling, tenderness, or minor bruising may occur. These reactions usually subside gradually."
    }
  },
  {
    treatment: "stymulatory-tkankowe",
    question: {
      pl: "Ile zabiegów należy wykonać?",
      en: "How many treatments are needed?"
    },
    answer: {
      pl: "Liczba zabiegów zależy od kondycji skóry, zastosowanego preparatu i oczekiwanego efektu. Podczas konsultacji dobierany jest indywidualny plan zabiegowy",
      en: "The number of treatments depends on the condition of the skin, the product used, and the desired results. An individual treatment plan is established during the consultation."
    }
  },
  {
    treatment: "modelowanie-ust",
    question: {
      pl: "Kiedy zobaczę ostateczny efekt?",
      en: "When will I see the final results?"
    },
    answer: {
      pl: "Bezpośrednio po zabiegu usta mogą być opuchnięte i nie oddawać rzeczywistego efektu. Ostateczny wygląd oceniamy zwykle po około 5 tygodniach.",
      en: "Immediately after the treatment, your lips may be swollen and may not reflect the actual results. The final appearance is usually assessed after approximately five weeks."
    }
  },
  {
    treatment: "usuwanie-kwasu-hialuronowego",
    question: {
      pl: "Czy po zabiegu występuje obrzęk?",
      en: "Does swelling occur after the treatment?"
    },
    answer: {
      pl: "Tak. Może pojawić się obrzęk, zaczerwienienie, tkliwość lub niewielkie zasinienie w miejscu podania preparatu. Reakcje te zazwyczaj mają charakter przejściowy. Nasilony lub narastający obrzęk wymaga oceny medycznej.",
      en: "Yes. Swelling, redness, tenderness, or minor bruising may occur at the injection site. These reactions are usually temporary. Significant or worsening swelling requires medical assessment."
    }
  },
  {
    treatment: "wolumetria-katow-zuchwy",
    question: {
      pl: "Jak długo utrzymuje się efekt?",
      en: "How long do the results last?"
    },
    answer: {
      pl: "Czas utrzymywania się efektu jest indywidualny i zależy m.in. od zastosowanego preparatu, miejsca podania oraz metabolizmu.",
      en: "The longevity of the results varies from person to person and depends on several factors, including the product used, the injection site, and individual metabolism."
    }
  },
  {
    treatment: "wolumetria-policzkow",
    question: {
      pl: "Czy po zabiegu mogą pojawić się siniaki?",
      en: "Can bruising occur after the treatment?"
    },
    answer: {
      pl: "Tak. Zasinienie, obrzęk i tkliwość mogą wystąpić po zabiegu i zwykle mają charakter przejściowy.",
      en: "Yes. Bruising, swelling, and tenderness may occur after the treatment and are usually temporary."
    }
  },
  {
    treatment: "wolumetria-brody",
    question: {
      pl: "Czy można skorygować asymetrię brody?",
      en: "Can chin asymmetry be corrected?"
    },
    answer: {
      pl: "W niektórych przypadkach tak. Możliwość korekcji zależy od rodzaju i stopnia asymetrii oraz indywidualnej anatomii.",
      en: "In some cases, yes. The possibility of correction depends on the type and degree of asymmetry, as well as individual anatomy."
    }
  },
  {
    treatment: "stymulatory-tkankowe",
    question: {
      pl: "Czy zabieg boli?",
      en: "Is the treatment painful?"
    },
    answer: {
      pl: "Odczuwanie bólu jest kwestią indywidualną. W zależności od okolicy i zastosowanego preparatu możliwe jest zastosowanie odpowiedniego znieczulenia.",
      en: "Pain perception varies from person to person. Depending on the area being treated and the product used, an appropriate form of anaesthesia may be applied."
    }
  },
  {
    treatment: "modelowanie-ust",
    question: {
      pl: "Czy można uzyskać naturalny efekt?",
      en: "Is it possible to achieve a natural-looking result?"
    },
    answer: {
      pl: "Tak. Ilość preparatu i technika podania są dobierane indywidualnie. Celem zabiegu nie musi być duża objętość często najważniejsza jest poprawa proporcji, konturu i harmonii ust.",
      en: "Yes. The amount of product used and the injection technique are tailored to each individual. The goal of the treatment does not have to be increased volume. In many cases, the priority is to improve the proportions, contour, and overall harmony of the lips."
    }
  },
  {
    treatment: "usuwanie-kwasu-hialuronowego",
    question: {
      pl: "Czy hialuronidaza może rozpuścić naturalny kwas hialuronowy?",
      en: "Can hyaluronidase dissolve naturally occurring hyaluronic acid?"
    },
    answer: {
      pl: "Tak. Enzym nie działa wyłącznie na podany wypełniacz — może również czasowo rozkładać naturalnie występujący w tkankach kwas hialuronowy. Organizm stopniowo go odbudowuje, ale przebieg tego procesu jest indywidualny.",
      en: "Yes. The enzyme does not act exclusively on injected filler; it can also temporarily break down hyaluronic acid that occurs naturally in the tissues. The body gradually replenishes it, but the process varies from person to person."
    }
  },
  {
    treatment: "wolumetria-katow-zuchwy",
    question: {
      pl: "Czy można wykonać jednocześnie wolumetrię brody i żuchwy?",
      en: "Can chin and jawline filler treatments be performed together?"
    },
    answer: {
      pl: "Tak, w odpowiednio dobranych przypadkach połączenie tych obszarów pozwala kompleksowo pracować nad proporcjami dolnej części twarzy. Zakres zabiegu ustalany jest podczas konsultacji.",
      en: "Yes. In suitable cases, treating both areas can help improve the proportions of the lower face more comprehensively. The scope of the treatment is determined during the consultation."
    }
  },
  {
    treatment: "wolumetria-policzkow",
    question: {
      pl: "Czy policzki można modelować etapami?",
      en: "Can cheek augmentation be performed gradually over several sessions?"
    },
    answer: {
      pl: "Tak. W wielu przypadkach stopniowe budowanie efektu pozwala zachować większą kontrolę nad rezultatem i uzyskać naturalną harmonię twarzy.",
      en: "Yes. In many cases, building the results gradually allows for greater control over the outcome and helps achieve natural-looking facial harmony."
    }
  },
  {
    treatment: "wolumetria-brody",
    question: {
      pl: "Czy można wykonać wolumetrię brody razem z innymi zabiegami?",
      en: "Can chin augmentation be combined with other treatments?"
    },
    answer: {
      pl: "W niektórych przypadkach zabiegi można łączyć, jednak decyzja zawsze zależy od indywidualnej oceny i bezpieczeństwa terapii.",
      en: "In some cases, treatments can be combined. However, the decision always depends on an individual assessment and the safety of the treatment plan."
    }
  },
  {
    treatment: "stymulatory-tkankowe",
    question: {
      pl: "Czy po zabiegu występuje obrzęk?",
      en: "Does swelling occur after the treatment?"
    },
    answer: {
      pl: "Może pojawić się niewielki obrzęk, zaczerwienienie lub tkliwość w miejscu podania. Są to typowe, przejściowe reakcje po iniekcji.",
      en: "Mild swelling, redness, or tenderness may occur at the injection site. These are typical, temporary reactions following an injection."
    }
  },
  {
    treatment: "modelowanie-ust",
    question: {
      pl: "Czy można modelować usta, jeśli wcześniej miałam podany kwas hialuronowy?",
      en: "Can I have my lips reshaped if I have previously had hyaluronic acid injections?Can I have my lips reshaped if I have previously had hyaluronic acid injections?"
    },
    answer: {
      pl: "Tak, ale podczas konsultacji konieczna jest ocena obecności i stanu wcześniejszego preparatu. W niektórych przypadkach przed kolejnym modelowaniem może być wskazane rozpuszczenie poprzedniego wypełniacza.",
      en: "Yes, but during the consultation, the presence and condition of the previously injected filler must be assessed. In some cases, dissolving the previous filler may be recommended before another lip augmentation treatment."
    }
  },
  {
    treatment: "usuwanie-kwasu-hialuronowego",
    question: {
      pl: "Czy po hialuronidazie można ponownie modelować usta?",
      en: "Can I have my lips reshaped again after hyaluronidase treatment?"
    },
    answer: {
      pl: "Tak, w wielu przypadkach jest to możliwe. Przed kolejnym modelowaniem należy jednak ocenić stan tkanek i upewnić się, że okolica jest odpowiednio wygojona. Termin kolejnego zabiegu ustalany jest indywidualnie.",
      en: "Yes, in many cases this is possible. However, the condition of the tissues must be assessed before another lip treatment, and the area must be allowed to heal adequately. The timing of the next treatment is determined individually."
    }
  },
  {
    treatment: "stymulatory-tkankowe",
    question: {
      pl: "Czy mogę wykonać stymulator bez konsultacji?",
      en: "Can I have a tissue stimulator treatment without a consultation?"
    },
    answer: {
      pl: "Dobór preparatu zawsze powinien być poprzedzony oceną skóry i wywiadem. Nie każdy preparat będzie odpowiedni dla każdej osoby.",
      en: "The choice of product should always be preceded by an assessment of the skin and a medical history review. Not every product is suitable for every person."
    }
  },
  {
    treatment: "modelowanie-ust",
    question: {
      pl: "Jak przygotować się do zabiegu?",
      en: "How should I prepare for the treatment?"
    },
    answer: {
      pl: "Przed zabiegiem warto odpowiednio się nawodnić, unikać alkoholu oraz poinformować o wszystkich przyjmowanych lekach, suplementach, chorobach i wcześniejszych zabiegach w okolicy ust.",
      en: "Before the treatment, it is advisable to stay well hydrated, avoid alcohol, and inform your practitioner about all medications and supplements you take, any medical conditions you have, and any previous treatments in the lip area."
    }
  },
  {
    treatment: "usuwanie-kwasu-hialuronowego",
    question: {
      pl: "Czy zabieg jest bezpieczny?",
      en: "Is hyaluronidase treatment safe?"
    },
    answer: {
      pl: "Hialuronidaza wymaga odpowiedniej kwalifikacji i znajomości możliwych powikłań. Szczególną uwagę należy zwrócić na ryzyko reakcji alergicznej, w tym rzadkiej, ale potencjalnie ciężkiej reakcji anafilaktycznej. Przed zabiegiem konieczny jest dokładny wywiad i ocena przeciwwskazań.",
      en: "Hyaluronidase treatment requires appropriate patient assessment and knowledge of potential complications. Particular attention must be paid to the risk of allergic reactions, including a rare but potentially severe anaphylactic reaction. A thorough medical history and assessment of contraindications are essential before treatment."
    }
  },
  {
    treatment: "modelowanie-ust",
    question: {
      pl: "Jak długo trwa zabieg?",
      en: "How long does the treatment take?"
    },
    answer: {
      pl: "Sam zabieg trwa zazwyczaj około 10-20 minut, w zależności od zastosowanej techniki i zakresu pracy.",
      en: "The procedure itself usually takes approximately 10–20 minutes, depending on the technique used and the extent of the treatment."
    }
  },
  {
    treatment: "usuwanie-kwasu-hialuronowego",
    question: {
      pl: "Czy hialuronidaza jest stosowana wyłącznie w przypadku nieudanego modelowania ust?",
      en: "Is hyaluronidase used only to correct unsuccessful lip augmentation?"
    },
    answer: {
      pl: "Nie. Może być wykorzystywana również w innych okolicach, w których wcześniej podano wypełniacz na bazie kwasu hialuronowego. Zakres jej zastosowania zależy od wskazań i indywidualnej oceny.",
      en: "No. It may also be used in other areas where hyaluronic acid-based fillers have previously been injected. Its use depends on the clinical indication and individual assessment."
    }
  }
];
