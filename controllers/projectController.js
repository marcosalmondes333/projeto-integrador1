import Project from '../models/Project.js';

export const getProjects = async (req, res) => {
  try {
    const { category, featured } = req.query;
    let filter = {};

    if (category) filter.category = category;
    if (featured) filter.featured = featured === 'true';

    const projects = await Project.find(filter).sort({ projectDate: -1 });
    
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar projetos.',
      error: error.message
    });
  }
};

export const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    res.status(201).json({
      success: true,
      message: 'Projeto criado com sucesso!',
      data: project
    });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao criar projeto.',
      error: error.message
    });
  }
};