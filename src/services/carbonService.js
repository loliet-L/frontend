import apiClient from './apiClient'

export const calculateEmissions = async (vehicle, distance) => {
    console.log("post request to /calculate") ;
    try {
        const response = await apiClient.post('/calculate', {
            vehicle,
            distance: Number(distance)
        });
        console.log(response.data);
        return response.data.data.co2;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getRecommendations = async (vehicle, distance, co2) => {
    console.log("post request to /recommendations") ;
    try {
        const response = await apiClient.post('/recommendations', {
            vehicle,
            distance: Number(distance),
            co2: co2
        });
        console.log(response.data);
        return response.data.data.recommendations;
    } catch (error) {
        console.log(error);
        throw error;
    }
}