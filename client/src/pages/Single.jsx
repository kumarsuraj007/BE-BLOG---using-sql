import {Link} from 'react-router-dom'
import Edit from '../assets/edit.png'
import Delete from '../assets/delete.png'
import Menu from '../components/Menu'


const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="user">
          <img src="https://images.unsplash.com/photo-1701252374715-b5d8ab0b5f2c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="info">
            <span>Suraj</span>
            <p>Posted 2 days ago.</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab at, libero, provident corrupti vero sapiente pariatur adipisci minima, ullam eos impedit dolore doloremque alias consequuntur nisi? Provident vero nesciunt itaque amet temporibus quos, eum quas molestiae molestias, quam ipsam odit aut, asperiores maxime error aperiam officia assumenda voluptatum ab rem enim? Earum numquam nulla recusandae aspernatur voluptatem hic repellendus voluptatibus velit laborum dolorum non consectetur architecto, sed magni assumenda. Tenetur aliquid sequi quisquam ducimus quasi consequatur ipsum iste, nulla quam voluptatem qui tempore vero quibusdam totam, quas molestiae architecto assumenda nemo dolores voluptas nam dolorum error incidunt. Laudantium dolorem minima est assumenda quod repudiandae maiores officiis eveniet dolore saepe a doloribus architecto, doloremque eos voluptates natus expedita qui itaque consectetur? Expedita id hic, dolorum minus molestiae amet. Quas, cum! Accusamus voluptates minima quo sint asperiores a sequi! Animi, reiciendis. Accusamus natus, voluptate nihil maxime iure ab debitis similique, aperiam iste repudiandae delectus? Autem atque, saepe harum eum ut quia maiores ab fuga officia odit expedita modi suscipit quisquam ipsa. Laborum itaque molestias non, neque quam dignissimos iusto consectetur exercitationem eligendi illum quidem error est quaerat odio quod. Corporis, assumenda similique! Harum maxime nesciunt aliquam molestias necessitatibus ad soluta, numquam quibusdam!</p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single