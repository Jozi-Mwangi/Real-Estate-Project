import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'ac7b747a1emsh7c0565bbabfc199p10d971jsna2316341e548',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}