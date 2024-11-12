const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = '330dcfdb1783321d47764dea9090a5';

async function fetchCmsApi(query, { variables } = {}) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const json = await res.json();
    if (json.errors) {
        throw new Error('Failed to fetch API');
    }

    return json.data
}

export async function getAllProjects() {
    const data = await fetchCmsApi(`
    {
        allHeaderTexts{
        headerSubtitlePt
        headerSubtitleEn
        headerTitlePt
        headerTitleEn
        headerDescriptionPt
        headerDescriptionEn
      }
      allProjectArticles{
        id
            projectUrl
        latestProject
        projectType
        projectTitlePt
        projectTitleEn
        projectDescriptionPt
        projectDescriptionEn
        projectImage{
        url
        }
      }
    }`);

    return data;
}



export default { getAllProjects };