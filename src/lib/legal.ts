import { ADDRESS, PHONE_DISPLAY } from "./links";

/**
 * Dane administratora do polityki prywatności i regulaminu.
 * TODO: uzupełnić – dopóki pole jest puste, na stronie widać wyróżnione "[do uzupełnienia: …]".
 */
export const LEGAL = {
  /** Imię i nazwisko lub pełna nazwa firmy z CEIDG, np. "Julia Majewska prowadząca działalność pod firmą …". */
  adminName: "",
  /** NIP (jeśli jest działalność gospodarcza). */
  nip: "",
  /** Adres do korespondencji – domyślnie adres gabinetu. */
  address: `${ADDRESS.street}, ${ADDRESS.city}`,
  email: "juliamajewska@gmail.com",
  phone: PHONE_DISPLAY,
  lastUpdated: "5 listopada 2026",
};
