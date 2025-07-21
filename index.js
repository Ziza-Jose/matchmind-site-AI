// Netlify Function para atualizações diárias de partidas
exports.handler = async () => {
  return {
    statusCode: 200,
    body: 'Atualização feita com sucesso.'
  };
};