export const getAllProjects = jest.fn().mockResolvedValue({
  allHeaderTexts: [
    {
      headerSubtitlePt: 'Subtítulo em português mockado',
      headerSubtitleEn: 'Mocked English Subtitle',
      headerTitlePt: 'Título em português mockado',
      headerTitleEn: 'Mocked English Title',
      headerDescriptionPt: 'Descrição em português mockada',
      headerDescriptionEn: 'Mocked English Description',
    },
  ],
  allProjectArticles: [
    {
      id: 1,
      projectUrl: 'https://example.com',
      projectImage: { url: 'https://via.placeholder.com/150' },
      projectTitleEn: 'Project 1',
      projectDescriptionEn: 'Description of Project 1',
      projectTitlePt: 'Projeto 1',
      projectDescriptionPt: 'Descrição do Projeto 1',
    },
    {
      id: 2,
      projectUrl: 'https://example2.com',
      projectImage: { url: 'https://via.placeholder.com/150' },
      projectTitleEn: 'Project 2',
      projectDescriptionEn: 'Description of Project 2',
      projectTitlePt: 'Projeto 2',
      projectDescriptionPt: 'Descrição do Projeto 2',
    },
  ],
});
