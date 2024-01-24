import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAuth from "../hooks/useAuth";

import dadoService from '../services/phonebook'
import Input from '../layout/Input'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import './Editar.css'

function Editar() {
  const { id } = useParams()
  const [nome, setNome] = useState('')
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState(null);
  const [descricao, setDescricao] = useState('')
  const [foto, setFoto] = useState(null)
  const urlBase = 'http://localhost:3001/images/';
  const {user} = useAuth();

  useEffect(() => {
    dadoService.getOne(id).then((response) => {
      setNome(response.data.nome)
      setDescricao(response.data.descricao)

      setFoto(response.data.foto)
    })
  }, [id, foto])


  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const submitComment = () => {
    // Certifique-se de que o newComment não está vazio antes de enviar
    if (newComment.trim() === '') {
      setError('O comentário não pode estar vazio.');
      return;
    }
    const dadoObject = {
      comment: newComment,
      user_id: user.id,
      post_id: id
    };
    console.log(dadoObject)
    // Envia o novo comentário para o backend
    dadoService.createComment(dadoObject)
    
      .then(() => {
        setNewComment('');
        setError(null); // Limpar qualquer erro anterior
      })
      .catch((error) => {
        console.error("Erro ao criar comentário:", error);
        setError("Erro ao criar comentário.");
      });
  };

 


  return (
    <div>
      <Header />
    <div className='container'>
      <h2> Comentários </h2>
      <hr />
      {/* Exibe o post aqui */}
      <div>
          <h2 className="post-title ">{nome}</h2>
          <p className="post-description">{descricao}</p>
          <img
            src={urlBase + foto}
            className='card-img-top'
            alt='foto'
          />
          <div className="comment-form mt-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Adicione um comentário..."
            value={newComment}
            onChange={handleCommentChange}
          />
          <button className="btn btn-primary mt-2" onClick={submitComment}>Enviar Comentário</button>
        </div>

          
        </div>
        
    </div>
    
    <Footer />
    </div >
  )
}

export default Editar
