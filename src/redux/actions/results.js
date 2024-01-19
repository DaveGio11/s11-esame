import { fetchStorage } from "../reducers/index";
export const fetchSongsAction = (url, query) => async (dispatch) => {
  try {
    const response = await fetch(url + query);

    if (response.ok) {
      const { data } = await response.json();
      dispatch(fetchStorage(data));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};
