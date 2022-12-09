import { PlaceCardType } from "../interfaces";
import { api } from "../services/axios";

type APIResponseType = {
    data: PlaceCardType[];
    message: any;
    error: any;
};

export async function getPlaces() {
    try {
        const { data, } = await api.get<APIResponseType>("api/places/cards");
        console.log("PLACES >>>", data.data);
        if (data.error) throw data.error;
        const places = data.data || [];
        return places
    } catch (error) {
        console.error("ERROR >>>", error);
        return []
    }
}
