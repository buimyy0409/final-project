import React, { useState } from 'react';
import './style.css';
import { Card } from 'antd';
import UpdateTotalPayment from '../components/UpdateTotalPayment';
import UpdateTotalReceipt from '../components/UpdateTotalReceipt';

const ProfileScreen = () => {
  const [receipt, setReceipt] = useState([]);
  const [payment, setPayment] = useState([]);
    const progressBarStyle = {
        width: '50%', 
    };

    return (
        <div>
            <header>
  
</header>
<main>
<h1 className='profile'>Profile</h1>
  <div className="jumbo"></div>

  <div className="container icons">
  
    <div className="big-icon"></div>
    
    
  </div>
 
  <div className="details">
    <h3>Imei Wallet</h3>
    <p>Manage your money monthly</p>
  </div>
  <div className="row mt-2" style={{ padding: "10px" }}>
              <Card className="col mt-3 shadow p-3 mb-3 bg-body rounded">
              <UpdateTotalReceipt receipt={receipt} />
              </Card>
              <Card
                className="col mt-3 shadow p-3 mb-3 bg-body rounded"
                style={{ marginLeft: "10px" }}
              >
                <UpdateTotalPayment payment={payment} />
              </Card>
            </div>
  <div className="container bio">
      <div className="title">
        <h6>Biography</h6>
      </div>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro officiis fugit hic vel voluptates perferendis aut quibusdam sit omnis unde aspernatur quae repellat blanditiis autem, a libero asperiores neque illum aliquid est tempore. Eveniet velit voluptate amet facere, repellendus aperiam, cumque est ipsam. Asperiores expedita iusto, inventore sit suscipit nihil repudiandae? Laboriosam cum maxime dolorem neque, in veniam expedita ad. Hic fugit necessitatibus blanditiis, optio dignissimos molestiae nam, numquam odio.</p>
      </div>
      <hr />
  </div>
  <div className="container pics">
    <div className="title">
      <h6>Pictures</h6>
    </div>
    <div className="row row-1">
      <div className="col m6 s12">
        <div className="card">
                <div className="card-image" id="first-img">
                    <span className="card-title">Inception</span>
                </div>
              </div>
      </div>
      <div className="col m6 s12">
        <div className="card">
                <div className="card-image" id="second-img">
                    <span className="card-title">Django Unchained</span>
                </div>
              </div>
      </div>
    </div>
    <div className="row">
      <div className="col m6 s12">
        <div className="card">
                <div className="card-image" id="third-img">
                    <span className="card-title">The Wolf of Wallstreet</span>
                </div>
              </div>
      </div>
      <div className="col m6 s12">
        <div className="card">
                <div className="card-image" id="forth-img">
                    <span className="card-title">The Great Gatsby</span>
                </div>
              </div>
      </div>
    </div>
  </div>
  <div className="container posts">
    <div className="title">
      <h6>Posts</h6>
    </div>
    <div className="row">
          <div className="col s12 m6">
              <div className="card blue-grey">
                <div className="card-content white-text">
                    <span className="card-title">Post title</span>
                    <p></p>
                </div>
          <div className="card-action">
            <a href="#">Read more...</a>
            <div className="tags">
              <div className="chip">
                Story
              </div>
              <div className="chip">
                Adventure
              </div>
            </div>
            <i className="material-icons card-love">favorite_border</i>
          </div>
              </div>
          </div>
      <div className="col s12 m6">
              <div className="card blue-grey">
                <div className="card-content white-text">
                    <span className="card-title">Post title</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aliquid nobis nesciunt nulla laudantium aspernatur, delectus sed, minus ex perspiciatis...</p>
                </div>
          <div className="card-action">
            <a href="#">Read more...</a>
            <div className="tags">
              <div className="chip">
                Personal
              </div>
            </div>
            <i className="material-icons card-love">favorite_border</i>
          </div>
              </div>
          </div>
      </div>

  </div>
  <div className="container blogs">
    <div className="title">
      <h6>Blogs</h6>
    </div>
    <ul className="collapsible" data-collapsible="accordion">
      <li>
        <div className="collapsible-header active"><i className="material-icons">filter_drama</i>First blog</div>
        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tempora nobis, amet ipsa qui officiis modi consequatur reprehenderit expedita nihil ab recusandae, molestiae. Maiores reprehenderit mollitia nisi perferendis quisquam eos repudiandae harum ducimus, impedit et numquam tempore? Labore explicabo sit mollitia sequi doloribus perspiciatis rem corporis veniam, aspernatur autem, tempore consequuntur asperiores excepturi quas ratione natus! Nesciunt, animi! Laudantium quia, aliquam non dolorem, aliquid quod soluta sit id suscipit facilis! Omnis qui in perferendis debitis quam architecto dignissimos sequi asperiores, porro explicabo blanditiis voluptate, totam necessitatibus quia repellendus dolorum animi accusamus molestias assumenda culpa unde sapiente magnam aut fuga? A quae magnam, ipsam modi minus. Optio nihil consequuntur rem quas, eveniet temporibus at atque voluptas voluptatibus beatae animi aliquam quos natus cum magni nobis doloremque illum incidunt, tenetur, quasi sunt aperiam? Reprehenderit officiis consequuntur repellat, atque provident quam. Ut perferendis libero fugiat hic nobis, iusto at dolorum ratione, facere, ipsum saepe, aliquid officia nihil. Inventore, voluptatibus animi sunt ratione adipisci reprehenderit nostrum qui cumque eum ut! Minima suscipit ratione voluptates, et, temporibus vitae doloribus ipsa ipsam. Eligendi ducimus distinctio perferendis praesentium. Eius dolor magni perspiciatis velit, possimus unde quis ea in inventore veritatis facere dicta delectus officiis aut vero voluptatum.</p></div>
      </li>
      <li>
          <div className="collapsible-header"><i className="material-icons">place</i>Second blog</div>
          <div className="collapsible-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iure ratione facilis sapiente est, repellendus nesciunt voluptatum tempore magni natus, eius, cumque voluptates illo earum libero obcaecati, deleniti ducimus similique accusamus! Autem totam ipsa minus modi sed tempora porro. Commodi iste inventore fugit reprehenderit maiores dolorem cupiditate debitis repellat, perferendis minus sed, ipsa nulla, beatae eum nobis, asperiores aut aspernatur fuga mollitia itaque. Doloremque reprehenderit earum molestias non voluptatem veniam voluptates expedita, at, eius sunt rerum perspiciatis suscipit iure perferendis. Earum, quasi beatae qui unde ullam fuga assumenda! Consectetur natus temporibus, ipsa, mollitia odit, aliquid id aliquam assumenda quidem, optio ducimus dolor quis corporis iure praesentium sunt rem facilis atque quod odio. Rerum dolores aperiam numquam rem expedita, alias officiis officia minima impedit, beatae libero debitis eligendi. Placeat consequatur non, consectetur accusantium laborum sequi. Explicabo facilis officiis culpa debitis dicta omnis illo quo natus iste, fugiat vitae magni voluptatum. Sequi, illum! Ea voluptatum at similique, sint quisquam dolorum fuga repellat perferendis animi ullam eligendi, sed sapiente placeat non ducimus modi sit tempore reprehenderit deserunt cumque molestiae quod! Ipsam pariatur dicta iusto, illum in vel optio nam aut reprehenderit quam minima dolorem, eaque dignissimos harum. Nobis porro id molestiae eaque reprehenderit voluptas optio, assumenda, nisi fuga cupiditate, minima consequatur fugit dolorum. Ipsam harum, aspernatur.</p></div>
      </li>
      <li>
          <div className="collapsible-header"><i className="material-icons">whatshot</i>Third blog</div>
          <div className="collapsible-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ullam asperiores illo, neque, et possimus, laudantium excepturi non sunt necessitatibus cum perferendis atque? Nihil aut adipisci non perferendis fuga voluptatem mollitia. Dicta obcaecati facilis veritatis! Sapiente omnis enim quos non alias, sit, cupiditate nesciunt perferendis rem est voluptatem blanditiis molestias dolor deserunt. Distinctio, odit. Rerum maiores, a voluptas, dolores eum veniam quod alias. Ipsum doloremque suscipit, corporis sapiente laudantium. Vel possimus eveniet error nostrum sint id, assumenda sunt quam hic, voluptatibus ipsum praesentium a odio voluptas ab eius est suscipit excepturi accusamus quo iure nemo! Vel tempora distinctio assumenda nam, ex ipsam adipisci deleniti voluptas eos unde recusandae provident nemo. Reprehenderit labore necessitatibus rem, suscipit quidem recusandae amet reiciendis pariatur!</p></div>
      </li>
      </ul>
  </div>
  <div className="container likes">
    <div className="title">
      <h6>Likes</h6>
    </div>
    <div className="row">
        <div className="col s12">
            
        </div>
        <div id="test1" className="col s12">All</div>
        <div id="test2" className="col s12">
        <div className="row">
          <div className="col s12 m6">
            <img className="materialboxed responsive-img" src="http://materializecss.com/images/sample-1.jpg"/>
          </div>
          <div className="col s12 m6">
            <img className="materialboxed responsive-img" src="http://materializecss.com/images/sample-1.jpg"/>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <img className="materialboxed responsive-img" src="http://materializecss.com/images/sample-1.jpg"/>
          </div>
          <div className="col s12 m6">
            <img className="materialboxed responsive-img" src="http://materializecss.com/images/sample-1.jpg"/>
          </div>
        </div>
      </div>
        <div id="test3" className="col s12">
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey">
                <div className="card-content white-text">
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aliquid nobis nesciunt nulla laudantium aspernatur, delectus sed, minus ex perspiciatis...</p>
                </div>
          <div className="card-action">
            <a href="#">Read more...</a>
            <div className="tags">
              <div className="chip">
                Story
              </div>
              <div className="chip">
                Adventure
              </div>
            </div>
            <i className="material-icons card-love">favorite_border</i>
          </div>
              </div>
          </div>
          <div className="col s12 m6">
            <div className="card blue-grey">
                <div className="card-content white-text">
                    <span className="card-title">Post title</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aliquid nobis nesciunt nulla laudantium aspernatur, delectus sed, minus ex perspiciatis...</p>
                </div>
          <div className="card-action">
            <a href="#">Read more...</a>
            <div className="tags">
              <div className="chip">
                Story
              </div>
              <div className="chip">
                Adventure
              </div>
            </div>
            <i className="material-icons card-love">favorite_border</i>
          </div>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey">
                <div className="card-content white-text">
                    <span className="card-title">Post title</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aliquid nobis nesciunt nulla laudantium aspernatur, delectus sed, minus ex perspiciatis...</p>
                </div>
          <div className="card-action">
            <a href="#">Read more...</a>
            <div className="tags">
              <div className="chip">
                Story
              </div>
              <div className="chip">
                Adventure
              </div>
            </div>
            <i className="material-icons card-love">favorite_border</i>
          </div>
              </div>
          </div>
          <div className="col s12 m6">
            <div className="card blue-grey">
                <div className="card-content white-text">
                    <span className="card-title">Post title</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aliquid nobis nesciunt nulla laudantium aspernatur, delectus sed, minus ex perspiciatis...</p>
                </div>
          <div className="card-action">
            <a href="#">Read more...</a>
            <div className="tags">
              <div className="chip">
                Story
              </div>
              <div className="chip">
                Adventure
              </div>
            </div>
            <i className="material-icons card-love">favorite_border</i>
          </div>
              </div>
          </div>
        </div>
      </div>
        <div id="test4" className="col s12">
        <ul className="collapsible" data-collapsible="accordion">
      <li>
        <div className="collapsible-header active"><i className="material-icons">filter_drama</i>First blog</div>
        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tempora nobis, amet ipsa qui officiis modi consequatur reprehenderit expedita nihil ab recusandae, molestiae. Maiores reprehenderit mollitia nisi perferendis quisquam eos repudiandae harum ducimus, impedit et numquam tempore? Labore explicabo sit mollitia sequi doloribus perspiciatis rem corporis veniam, aspernatur autem, tempore consequuntur asperiores excepturi quas ratione natus! Nesciunt, animi! Laudantium quia, aliquam non dolorem, aliquid quod soluta sit id suscipit facilis! Omnis qui in perferendis debitis quam architecto dignissimos sequi asperiores, porro explicabo blanditiis voluptate, totam necessitatibus quia repellendus dolorum animi accusamus molestias assumenda culpa unde sapiente magnam aut fuga? A quae magnam, ipsam modi minus. Optio nihil consequuntur rem quas, eveniet temporibus at atque voluptas voluptatibus beatae animi aliquam quos natus cum magni nobis doloremque illum incidunt, tenetur, quasi sunt aperiam? Reprehenderit officiis consequuntur repellat, atque provident quam. Ut perferendis libero fugiat hic nobis, iusto at dolorum ratione, facere, ipsum saepe, aliquid officia nihil. Inventore, voluptatibus animi sunt ratione adipisci reprehenderit nostrum qui cumque eum ut! Minima suscipit ratione voluptates, et, temporibus vitae doloribus ipsa ipsam. Eligendi ducimus distinctio perferendis praesentium. Eius dolor magni perspiciatis velit, possimus unde quis ea in inventore veritatis facere dicta delectus officiis aut vero voluptatum.</p></div>
      </li>
      <li>
          <div className="collapsible-header"><i className="material-icons">place</i>Second blog</div>
          <div className="collapsible-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iure ratione facilis sapiente est, repellendus nesciunt voluptatum tempore magni natus, eius, cumque voluptates illo earum libero obcaecati, deleniti ducimus similique accusamus! Autem totam ipsa minus modi sed tempora porro. Commodi iste inventore fugit reprehenderit maiores dolorem cupiditate debitis repellat, perferendis minus sed, ipsa nulla, beatae eum nobis, asperiores aut aspernatur fuga mollitia itaque. Doloremque reprehenderit earum molestias non voluptatem veniam voluptates expedita, at, eius sunt rerum perspiciatis suscipit iure perferendis. Earum, quasi beatae qui unde ullam fuga assumenda! Consectetur natus temporibus, ipsa, mollitia odit, aliquid id aliquam assumenda quidem, optio ducimus dolor quis corporis iure praesentium sunt rem facilis atque quod odio. Rerum dolores aperiam numquam rem expedita, alias officiis officia minima impedit, beatae libero debitis eligendi. Placeat consequatur non, consectetur accusantium laborum sequi. Explicabo facilis officiis culpa debitis dicta omnis illo quo natus iste, fugiat vitae magni voluptatum. Sequi, illum! Ea voluptatum at similique, sint quisquam dolorum fuga repellat perferendis animi ullam eligendi, sed sapiente placeat non ducimus modi sit tempore reprehenderit deserunt cumque molestiae quod! Ipsam pariatur dicta iusto, illum in vel optio nam aut reprehenderit quam minima dolorem, eaque dignissimos harum. Nobis porro id molestiae eaque reprehenderit voluptas optio, assumenda, nisi fuga cupiditate, minima consequatur fugit dolorum. Ipsam harum, aspernatur.</p></div>
      </li>
      <li>
          <div className="collapsible-header"><i className="material-icons">whatshot</i>Third blog</div>
          <div className="collapsible-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ullam asperiores illo, neque, et possimus, laudantium excepturi non sunt necessitatibus cum perferendis atque? Nihil aut adipisci non perferendis fuga voluptatem mollitia. Dicta obcaecati facilis veritatis! Sapiente omnis enim quos non alias, sit, cupiditate nesciunt perferendis rem est voluptatem blanditiis molestias dolor deserunt. Distinctio, odit. Rerum maiores, a voluptas, dolores eum veniam quod alias. Ipsum doloremque suscipit, corporis sapiente laudantium. Vel possimus eveniet error nostrum sint id, assumenda sunt quam hic, voluptatibus ipsum praesentium a odio voluptas ab eius est suscipit excepturi accusamus quo iure nemo! Vel tempora distinctio assumenda nam, ex ipsam adipisci deleniti voluptas eos unde recusandae provident nemo. Reprehenderit labore necessitatibus rem, suscipit quidem recusandae amet reiciendis pariatur!</p></div>
      </li>
      </ul>
      </div>
      </div>
  </div>
  <div className="fixed-action-btn fab">
      <a className="btn-floating btn-large red">
          <i className="large material-icons">arrow_drop_up</i>
    </a>
      <ul>
          <li><a className="btn-floating orange"><i className="material-icons">thumb_up</i></a></li>
      <li><a className="btn-floating green"><i className="material-icons">star</i></a></li>
      <li><a className="btn-floating blue"><i className="material-icons">add</i></a></li>
    </ul>
    </div>
</main>

<footer className="page-footer blue">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Material Profile</h5>
                <p className="grey-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptate.</p>
              </div>
              <div className="col l4 offset-l2 s12">
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            &copy; 2015 Copyright
            <a className="grey-text text-lighten-4 right" href="#!">Terms</a>
            </div>
          </div>
        </footer>
        </div>
    )
}

export default ProfileScreen;
