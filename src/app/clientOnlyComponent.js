import { useClient } from 'next/client';

const ClientOnlyComponent = () => {
    const isClient = useClient(); // Sprawdza, czy komponent jest renderowany po stronie klienta

    if (!isClient) {
        return null; // Jeśli renderowanie na serwerze, zwraca pustą zawartość
    }

    return <div>Renderowany tylko po stronie klienta</div>;
};

export default ClientOnlyComponent;