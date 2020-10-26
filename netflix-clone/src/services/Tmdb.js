/* eslint-disable default-case */
const apiKey = "71114203b1cf503f1b09000eb0b41857"
const baseUrl = "https://api.themoviedb.org/3"

const basicFetch = async (endpoint) => {
    const req = await fetch(`${baseUrl}${endpoint}`, 
        
    )   
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
			{
				slug: "originals",
				title: "Originais Netflix",
				response: await basicFetch(
					`/discover/tv/?with_networks=213&page=1&language=pt-BR&api_key=${apiKey}`
				),
			},
			{
				slug: "topRated",
				title: "Em Alta",
				response: await basicFetch(
					`/movie/top_rated?language=pt-BR&page=5&api_key=${apiKey}`
				),
			},
			{
				slug: "action",
				title: "Ação",
				response: await basicFetch(
					`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`
				),
			},
			{
				slug: "comedy",
				title: "Comédia",
				response: await basicFetch(
					`/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`
				),
			},
			{
				slug: "horror",
				title: "Terror",
				response: await basicFetch(
					`/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`
				),
			},
			{
				slug: "drama",
				title: "Drama",
				response: await basicFetch(
					`/discover/movie?with_genres=18&page=2&language=pt-BR&api_key=${apiKey}`
				),
			},
			{
				slug: "documentary",
				title: "Documentários",
				response: await basicFetch(
					`/discover/movie?with_genres=99&page=8&language=pt-BR&api_key=${apiKey}`
				),
			},
		];
    },
    getTitleInfo: async (titleId, type) => {
        let info = {}

        if(titleId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(
                        `/movie/${titleId}?language=pt-BR&api_key=${apiKey}`
                    ) 
                break
                case 'tv':
                    info = await basicFetch(
						`/tv/${titleId}?language=pt-BR&api_key=${apiKey}`
					);
                break
                default:
                    info = {}
                break    
            }
        }

        return info
    } 
    
}