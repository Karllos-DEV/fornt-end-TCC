import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './Cards.css';

function Cards({ posts, handleDelete }) {
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);


  const openConfirmation = (id) => {
    setTaskIdToDelete(id)
  } 

  
  const confirmDelete = () => {
    if (taskIdToDelete !== null) {
      handleDelete(taskIdToDelete)
      setTaskIdToDelete(null) // Limpa o ID do item a ser deletado
    }
  }

  const cancelDelete = () => {
    setTaskIdToDelete(null) // Limpa o ID do item a ser deletado
  }


//   const confirmDelete = async () => {
//   try {
//     if (taskIdToDelete !== null) {
//       await handleDelete(taskIdToDelete);
//       closeConfirmation();
//     }
//   } catch (error) {
//     console.error('Erro ao excluir post:', error);
//   }
// };

  return (
    <div className='row'>
      {posts.map((post) => (
        <div className='col-sm-4' key={post.id}>
          <div className='card mb-3'>
            <img
              src={`http://localhost:3001/images/${post.foto}`}
              className='card-img-top'
              alt='foto'
              style={{objectFit: 'cover', height: '200px'}}
            />
            <div className='card-body'>
              <h5 className='card-title'>{post.nome}</h5>
              <p className='card-text'>
                <i className="bi bi-chat-dots"></i> {post.descricao}
              </p>
            </div>
            <div className='card-footer text-muted'>
              <Link to={`/${post.id}`} className='btn btn-primary'>
                <i className="bi bi-wrench"></i> Editar
              </Link>
              <button
                className='btn btn-secondary mx-2'
                onClick={() => openConfirmation(post.id)}
              >
                <i className="bi bi-trash-fill"></i> Excluir
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* form exclusão */}
{taskIdToDelete !== null && (
        <div className='alert-overlay  formX'>
          <div className='alert bg-light  rounded'>
            <h4 className='mb-4'>Realmente deseja excluir?</h4>
            <div className='button-group p-1 '>
              <button className='btn btn-danger  m-3 ' onClick={confirmDelete}>
                Sim
              </button>
              <button className='btn btn-secondary m-3' onClick={cancelDelete}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
