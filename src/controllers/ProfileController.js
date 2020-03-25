import connection from '../database/index';

class ProfileController {
  async index(req, res) {
    const ongs_id = req.headers.authorization;

    const incidents = await connection('incidents')
      .where('ongs_id', ongs_id)
      .select('*');

    return res.json(incidents);
  }
}

export default new ProfileController();
