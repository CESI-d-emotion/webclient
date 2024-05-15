'use client'

import { useState } from 'react'
import { parseISO, format } from 'date-fns'
import { fr } from 'date-fns/locale'
<<<<<<< Updated upstream
import logoMinistere from '../../public/logoMinistere.png'
import Link from 'next/link'
import { createComment, getRessourceById, PostComment, RessourceById } from '@/lib/ressource/ressource.service'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { toast } from 'react-toastify'
import Image from 'next/image'

type Props = {
  ressource: RessourceById
}

export default function UneRessource({ressource}: Props) {
  const connectedUser = useSelector((state: RootState) => state.token)
  const [replyOpen, setReplyOpen] = useState({})
  const [newCommentOpen, setNewCommentOpen] = useState(false)
  const [comments, setComments] = useState<PostComment[]>(ressource.postComment)
  const [commentInput, setCommentInput] = useState<{attachedToId: number | null; content: string; attachedToType: string}>({
    attachedToId: null,
    content: '',
    attachedToType: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setCommentInput({
      ...commentInput,
      [e.target.name]: e.target.value
    })
  }

  // Fonction pour soumettre un nouveau commentaire ou une réponse
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, parentId: string) => {
    event.preventDefault()
    let attachedToId = null
    let attachedToType = 'ressource'

    if (parentId) {
      attachedToId = parseInt(parentId)
      attachedToType = 'comment'
    } else {
      attachedToId = ressource.id
    }

    // Ajouter commentaire
    const res = await createComment({content: commentInput.content, attachedToId, attachedToType}, connectedUser.token as string)

    if (res === 201) {
      toast.success("Commentaire ajoute")
      const refresh = await getRessourceById(ressource.id)
      setCommentInput({
        attachedToId: null,
        content: '',
        attachedToType: ''
      })
      setComments(refresh.data.postComment)
    } else {
      toast.error("Erreur lors de l'ajout du commentaire")
      setCommentInput({
        attachedToId: null,
        content: '',
        attachedToType: ''
      })
    }
    if (parentId !== null) {
      setReplyOpen(prevState => ({ ...prevState, [parentId]: false }))
    } else {
      setNewCommentOpen(false)
    }
  }

  // Fonction pour ouvrir ou fermer le formulaire de réponse à un commentaire
  const handleReplyToggle = parentId => {
    setReplyOpen(prevState => ({
      ...prevState,
      [parentId]: !prevState[parentId]
    }))
  }

  // Fonction pour ouvrir ou fermer le formulaire de nouveau commentaire
  const handleNewCommentToggle = () => {
    setNewCommentOpen(!newCommentOpen)
  }

  // Rendu du composant UneRessource
  return (
          <>
            <section className="bienvenue double">
              <div className="container ressource-titre">
                <div className="present myress aos-init aos-animate">
                  <h1>{ressource.title}</h1>
                </div>
                {connectedUser && connectedUser.token && (
                  <div className="present myress aos-init aos-animate btn-favoris">
                    <Link href="" className="favoris">
                      <i className="fa-regular fa-star filled"></i> Ajouter aux
                      favoris
                    </Link>
                  </div>
                )}
              </div>

              <div className="container ressource-info">
                <div className="present myress aos-init aos-animate">
                  <div className="image-ressource">
                    <Image
                      src={logoMinistere}
                      width={150}
                      height={20}
                      alt={`${ressource.title} cover`}
                      className="imageRessource"
                    />
                  </div>
                  <h3>Description</h3>
                  <p className="description">{ressource.content}</p>
                </div>
                <div className="present myress aos-init aos-animate">
                        <Link href={`/Association?id=${ressource.author.id}`}>
                          <div className="association">
                            <Image
                              src={logoMinistere}
                              width={150}
                              height={20}
                              alt={`${ressource.author.name} cover`}
                              className="imageAssociation"
                            />
                            <h2>{ressource.author.name}</h2>
                          </div>
                        </Link>
                  <p className="date">Date de création</p>
                  <p className="donnee-date">
                    <time dateTime={ressource.createdAt.toString()}>
                      {format(
                        parseISO(ressource.createdAt.toString()),
                        'EEEE d MMM yyyy',
                        { locale: fr }
                      )}
                    </time>
                  </p>
                  <p className="date">Date de modification</p>
                  <p className="donnee-date">
                    {ressource.createdAt < ressource.updatedAt && (
                      <time dateTime={ressource.updatedAt.toString()}>
                        {format(
                          parseISO(ressource.updatedAt.toString()),
                          'EEEE d MMM yyyy',
                          { locale: fr }
                        )}
                      </time>
                    )}
                    {ressource.createdAt == ressource.updatedAt && (
                      <time dateTime={ressource.updatedAt.toString()}>
                        {format(
                          parseISO(ressource.updatedAt.toString()),
                          'EEEE d MMM yyyy',
                          { locale: fr }
                        )}
                      </time>
                    )}
                  </p>
                </div>
              </div>

              <div className="container ressource-commentaire" id="comments">
                <h3 className="title">Commentaires</h3>
                {newCommentOpen && (
                  <form
                    onSubmit={e => handleSubmit(e, null)}
                    id="new-comment"
                    className="commentaire"
                  >
                    <h3>Ajouter un commentaire</h3>
                    <div className="mb-3">
                      <textarea
                        className="form-commentaire-comment"
                        placeholder="Votre commentaire ici..."
                        rows={3}
                        id="message"
                        name="content"
                        value={commentInput.content}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div>
                      <input
                        type="submit"
                        className="reponse-input"
                        value="Poster mon commentaire"
                      />
                    </div>
                  </form>
                )}
                {connectedUser && connectedUser.token && (
                  <button
                    onClick={handleNewCommentToggle}
                    className="ajout-commentaire"
                  >
                    {newCommentOpen
                      ? 'Fermer le formulaire'
                      : 'Ajouter un commentaire'}
                  </button>
                )}
                <div id="comments-list">
                  {comments.map(comment => (
                    <div key={comment.id}>
                      <article className="commentaire">
                        <div className="commentaire-likes-titres">
                          <div className="titre-commentaire">
                            <p className="auteur">{comment.user ? comment.user.firstName + ' ' + comment.user.lastName : comment.associationId}</p>
                            <time className="date">{comment.createdAt.toString()}</time>
                          </div>
                        </div>
                        <p className="comment">{comment.content}</p>
                        {connectedUser && connectedUser.token && (
                          <button
                            onClick={() => handleReplyToggle(comment.id)}
                            className="commentaire-repondre"
                          >
                            {replyOpen[comment.id]
                              ? 'Fermer la réponse'
                              : 'Répondre au commentaire'}
                          </button>
                        )}
                        {replyOpen[comment.id] && (
                          <form
                            onSubmit={e => handleSubmit(e, comment.id.toString())}
                            id={`reply-comment-${comment.id}`}
                          >
                            <div>
                              <textarea
                                className="form-commentaire-comment"
                                placeholder="Votre réponse au commentaire ici..."
                                rows={2}
                                id={`message-reply-${comment.id}`}
                                name="content"
                                value={commentInput.content}
                                onChange={handleChange}
                                required
                              ></textarea>
                            </div>
                            <div>
                              <input
                                type="submit"
                                className="reponse-input"
                                value="Répondre"
                              />
                            </div>
                          </form>
                        )}
                      </article>
                      {comment.childComments && comment.childComments.map(reply => (
                        <article key={reply.id} className="reponse">
                          <div className="titre-reponse">
                            <strong className="auteur">{reply.userId || reply.associationId}</strong>
                            <time className="date">{reply.createdAt.toString()}</time>
                          </div>
                          <p className="comment">{reply.content}</p>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
  )
}
=======
import { useSearchParams } from 'next/navigation'
import { ressourcesliste } from '@/donnees/ressources'
import { associationliste } from '@/donnees/associations'
import Link from 'next/link'

export default function UneRessource() {
  // Récupération des paramètres de la page
  const paramPage = useSearchParams()
  const id_ress = paramPage.get('id')

  const [comments, setComments] = useState([
    {
      id: 0,
      author: 'Georges Abitbol',
      text: 'Monde de merde!',
      date: '2024-05-12',
      likes: 4,
      likedByUser: false,
      replies: []
    },
    {
      id: 1,
      author: 'M. Callaghan',
      text: "L'homme le plus classe du monde meurt et ses dernières paroles sont 'monde de merde', pourquoi il a dit ça?",
      date: '2024-05-12',
      likes: 8,
      likedByUser: false,
      replies: []
    }
  ])

  const [replyOpen, setReplyOpen] = useState({})

  const [newCommentOpen, setNewCommentOpen] = useState(false)

  // Fonction pour ajouter un commentaire
  const addComment = (author, text, parentId) => {
    const now = new Date()
    const dateString = format(now, 'EEEE d MMM yyyy', { locale: fr })
    const newComment = {
      id: comments.length,
      author: author,
      text: text,
      date: dateString,
      likes: 0,
      likedByUser: false,
      replies: []
    }

    if (parentId !== null) {
      // Si le commentaire est une réponse, on l'ajoute à la liste des réponses du commentaire parent
      const updatedComments = comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...comment.replies, newComment]
          }
        }
        return comment
      })
      setComments(updatedComments)
    } else {
      // Sinon, on ajoute le nouveau commentaire à la liste des commentaires
      setComments([...comments, newComment])
    }
  }

  // Fonction pour gérer le like d'un commentaire
  const handleLike = commentId => {
    setComments(prevComments =>
      prevComments.map(comment => {
        if (comment.id === commentId) {
          // Si l'utilisateur a déjà aimé le commentaire, on diminue le nombre de likes, sinon on l'augmente
          return {
            ...comment,
            likes: comment.likedByUser ? comment.likes - 1 : comment.likes + 1,
            likedByUser: !comment.likedByUser
          }
        }
        return comment
      })
    )
  }

  // Fonction pour soumettre un nouveau commentaire ou une réponse
  const handleSubmit = (event, parentId) => {
    event.preventDefault()
    const nom =
      parentId !== null
        ? event.target[`nom-reply-${parentId}`].value
        : event.target['nom'].value
    const message =
      parentId !== null
        ? event.target[`message-reply-${parentId}`].value
        : event.target['message'].value
    addComment(nom, message, parentId)
    if (parentId !== null) {
      setReplyOpen(prevState => ({ ...prevState, [parentId]: false }))
    } else {
      setNewCommentOpen(false)
    }
    event.target.reset()
  }

  // Fonction pour ouvrir ou fermer le formulaire de réponse à un commentaire
  const handleReplyToggle = parentId => {
    setReplyOpen(prevState => ({
      ...prevState,
      [parentId]: !prevState[parentId]
    }))
  }

  // Fonction pour ouvrir ou fermer le formulaire de nouveau commentaire
  const handleNewCommentToggle = () => {
    setNewCommentOpen(!newCommentOpen)
  }

  // Rendu du composant UneRessource
  return (
    <>
      {ressourcesliste.map(ressource =>
        !id_ress || ressource.id === parseInt(id_ress) ? (
          <>
            <section className="bienvenue double">
              <div className="container ressource-titre">
                <div className="present myress aos-init aos-animate">
                  <h1>{ressource.titre}</h1>
                </div>
                <div className="present myress aos-init aos-animate btn-favoris">
                  <Link href="" className="favoris">
                    <i className="fa-regular fa-star filled"></i> Ajouter aux
                    favoris
                  </Link>
                </div>
              </div>

              <div className="container ressource-info">
                <div className="present myress aos-init aos-animate">
                  <div className="image-ressource">
                    <img
                      src={ressource.image}
                      width={150}
                      height={20}
                      alt={`${ressource.titre} cover`}
                      className="imageRessource"
                    />
                  </div>
                  <h3>Description</h3>
                  <p className="description">{ressource.content}</p>
                </div>
                <div className="present myress aos-init aos-animate">
                  {associationliste.map(association => {
                    return (
                      association.id == ressource.associationId && (
                        <Link href={`/Association?id=${association.id}`}>
                          <div className="association">
                            <img
                              src={association.image}
                              width={150}
                              height={20}
                              alt={`${association.name} cover`}
                              className="imageAssociation"
                            />
                            <h2>{association.name}</h2>
                          </div>
                        </Link>
                      )
                    )
                  })}
                  <p className="date">Date de création</p>
                  <p className="donnee-date">
                    <time dateTime={ressource.createdAt}>
                      {format(
                        parseISO(ressource.createdAt),
                        'EEEE d MMM yyyy',
                        { locale: fr }
                      )}
                    </time>
                  </p>
                  <p className="date">Date de modification</p>
                  <p className="donnee-date">
                    {ressource.createdAt < ressource.updatedAt && (
                      <time dateTime={ressource.updatedAt}>
                        {format(
                          parseISO(ressource.updatedAt),
                          'EEEE d MMM yyyy',
                          { locale: fr }
                        )}
                      </time>
                    )}
                    {ressource.createdAt == ressource.updatedAt && (
                      <time dateTime={ressource.updatedAt}>
                        {format(
                          parseISO(ressource.updatedAt),
                          'EEEE d MMM yyyy',
                          { locale: fr }
                        )}
                      </time>
                    )}
                  </p>
                </div>
              </div>

              <div className="container ressource-commentaire" id="comments">
                <h3 className="title">Commentaires</h3>
                {newCommentOpen && (
                  <form
                    onSubmit={e => handleSubmit(e, null)}
                    id="new-comment"
                    className="commentaire"
                  >
                    <h3>Ajouter un commentaire</h3>
                    <input
                      type="text"
                      className="form-commentaire-input"
                      placeholder="Nom"
                      id="nom"
                      name="nom"
                      required
                    />
                    <div className="mb-3">
                      <textarea
                        className="form-commentaire-comment"
                        placeholder="Votre commentaire ici..."
                        rows="3"
                        id="message"
                        name="message"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <input
                        type="submit"
                        className="reponse-input"
                        value="Poster mon commentaire"
                      />
                    </div>
                  </form>
                )}
                <button
                  onClick={handleNewCommentToggle}
                  className="ajout-commentaire"
                >
                  {newCommentOpen
                    ? 'Fermer le formulaire'
                    : 'Ajouter un commentaire'}
                </button>
                <div id="comments-list">
                  {comments.map(comment => (
                    <div key={comment.id}>
                      <article className="commentaire">
                        <div className="commentaire-likes-titres">
                          <div className="titre-commentaire">
                            <p className="auteur">{comment.author}</p>
                            <time className="date">{comment.date}</time>
                          </div>
                          <button onClick={() => handleLike(comment.id)}>
                            {comment.likedByUser ? '♡' : '♡'} {comment.likes}
                          </button>
                        </div>
                        <p className="comment">{comment.text}</p>
                        <button
                          onClick={() => handleReplyToggle(comment.id)}
                          className="commentaire-repondre"
                        >
                          {replyOpen[comment.id]
                            ? 'Fermer la réponse'
                            : 'Répondre au commentaire'}
                        </button>
                        {replyOpen[comment.id] && (
                          <form
                            onSubmit={e => handleSubmit(e, comment.id)}
                            id={`reply-comment-${comment.id}`}
                          >
                            <div className="input-commentaire">
                              <input
                                type="text"
                                className="form-commentaire-input"
                                id={`nom-reply-${comment.id}`}
                                placeholder="Nom"
                                name={`nom-reply-${comment.id}`}
                                required
                              />
                            </div>
                            <div>
                              <textarea
                                className="form-commentaire-comment"
                                placeholder="Votre réponse au commentaire ici..."
                                rows="2"
                                id={`message-reply-${comment.id}`}
                                name={`message-reply-${comment.id}`}
                                required
                              ></textarea>
                            </div>
                            <div>
                              <input
                                type="submit"
                                className="reponse-input"
                                value="Répondre"
                              />
                            </div>
                          </form>
                        )}
                      </article>
                      {comment.replies.map(reply => (
                        <article key={reply.id} className="reponse">
                          <div className="titre-reponse">
                            <strong className="auteur">{reply.author}</strong>
                            <time className="date">{reply.date}</time>
                          </div>
                          <p className="comment">{reply.text}</p>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : null
      )}
    </>
  )
}
>>>>>>> Stashed changes
