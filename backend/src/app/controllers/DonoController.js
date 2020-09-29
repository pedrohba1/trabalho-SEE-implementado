import client from '../../database'


class DonoController {

  async store (req, res){

    const {cpf, nome, linkedin, cep, data_nascimento, nmro_residencia} = req.body;

    const text = `INSERT INTO pizzaria.dono_de_negocio(cpf, nome,linkedin, cep, data_nascimento, nmro_residencia) VALUES($1, $2, $3, $4, TO_DATE('17/12/2015', $5), $6) RETURNING *`
    const values = [cpf,nome, linkedin, cep, data_nascimento , nmro_residencia]

    try {
      const result = await client.query(text, values)
      console.log(result.rows[0])
      return res.json({ result: result.rows[0]});

      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    } catch (err) {
      console.log(err.stack)
      return res.json({ error: 'error'});
    }
  }

  async index (req,res){


  }

  async update(req,res){

  }

  async destroy(req,res){

  }

  async show(req,res){


  }


}


export default new DonoController();