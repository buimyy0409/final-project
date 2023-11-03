import React, { useState } from "react";
import "./style.css";
import { Avatar, Card, Space } from "antd";
import UpdateTotalReceipt from "../components/UpdateTotalReceipt";
import UpdateTotalPayment from "../components/UpdateTotalPayment";

const ProfileScreen = () => {
  const [receipt, setReceipt] = useState([]);
  const [payment, setPayment] = useState([]);

  return (
    <div>
      <main style={{ padding: "0" }}>
        <h2 className="profile">Profile</h2>
        <Space style={{display: "flex",
                alignItems: "center",
                justifyContent:'center'}}  size={30}>
          <Space wrap size={30}>
            <Avatar
              style={{
                height: "70px",
                width: "70px",
                
              }}
              icon={
                <img src="https://i.pinimg.com/564x/db/fc/54/dbfc54ea5447860120435c549e276381.jpg" />
              }
            />
          </Space>
        </Space>
        <div className="details">
          <h3>Imei Wallet</h3>
          <h6>Manage your money monthly</h6>
          <div className="row col-8">
            <Card className="col">
              <UpdateTotalReceipt receipt={receipt} />
            </Card>
            <Card className="col">
              <UpdateTotalPayment payment={payment} />
            </Card>
          </div>
        </div>

        <div className="container bio">
          <div className="title">
            <h6>ABOUT OUR WEBSITE</h6>
          </div>
          <div className="content">
            <p style={{textAlign:'justify'}}>
              <h3>
                "Mastering the Art of Saving Money with Our Wallet Money Saving
                Website"
              </h3>
              <span  style={{fontWeight:'600', marginBottom:'10px'}}>
                Introduction: Saving money is a skill that everyone strives to
                master, but it can often feel like an uphill battle. However,
                with our innovative wallet money saving website, you can take
                control of your finances and achieve your savings goals like
                never before. In this blog post, we'll explore the features and
                benefits of our platform and provide you with valuable tips on
                how to make the most of your savings journey.
              </span>
              <br></br>
              FIRST : The Power of Digital Wallets: In today's digital age,
              traditional piggy banks and physical wallets are being replaced by
              digital wallets. Our wallet money saving website harnesses the
              power of technology to provide a secure and convenient platform
              for managing your savings. 
              <br></br>
              SECOND : Setting Financial Goals: One of the key features of our website is the ability to set financial goals.
              Whether you're saving for a dream vacation, a down payment on a
              house, or an emergency fund, our platform allows you to define
              your goals and allocate funds accordingly. 
              <br></br>
              THIRD : Automated Savings: Saving money requires discipline, but
              our website makes it easier than ever. With automated savings
              features, you can set up recurring transfers from your bank
              account to your digital wallet. 
              <br></br>
              FOURTH : Expense Tracking and Budgeting: Understanding where your
              money goes is essential for effective savings. Our wallet money
              saving website offers robust expense tracking and budgeting tools.
              
              <br></br>
              FIFTH : Savings Challenges and Rewards: To keep you motivated on
              your savings journey, our website offers savings challenges and
              rewards. These challenges encourage healthy financial habits and
              provide incentives to reach specific milestones. 
              <br></br>
              SIXTH: Community and Support: Saving money doesn't have to be a
              solitary pursuit. Our wallet money saving website fosters a
              vibrant community of like-minded individuals who share their
              experiences, tips, and success stories. C
              <br></br>
              CONCLUSION: With our wallet money saving website, you have the
              tools and resources to take control of your finances and achieve
              your savings goals. 
              <br></br>
              <span style={{fontWeight:'600', marginTop:'10px'}}>Remember, saving money is a long-term commitment, and our website
              is here to support you every step of the way. Join our community
              and experience the transformative power of effective money
              management. Start saving smarter, and let your wallet grow!</span>
            </p>
          </div>
          <hr />
        </div>

        <div className="container posts">
          <div className="title">
            <h6>Posts</h6>
          </div>
          
              <Card>

                <div className="card-content white-text">
                  <span className="card-title" style={{textAlign:'center'}}>
                    <a href="https://www.squawkfox.com/">SQUAWKFOX</a>
                  </span>
                  <p></p>
                </div>
                  <h3>Get inspired with The Cash and Kerry Podcast</h3>
                  <p>
                    Be motivated to unlock the path to wealth, health, and
                    happiness! Our expert guests reveal the money mistakes that
                    make us human.
                  </p></Card>
          
        
              <Card className="mt-2">

                <div className="card-content white-text">
                  <span className="card-title" style={{textAlign:'center'}}>
                    <a href="https://www.wisebread.com/">WISE BREAD</a>
                  </span>
                </div>
                  <h3>
                    “In fact, if you are living a truly frugal lifestyle, you'll
                    only appear to be paying top dollar for the finer things in
                    life, even as your wallet stays fat and happy.”
                  </h3>
                  <p>
                    That sounds pretty amazing, doesn't it? Well, amazing as it
                    is, this kind of lifestyle is exactly what Wisebread.com
                    promises, guided by a mission to help others live large on a
                    small budget.
                  </p>
                  </Card>
            
        </div>
        <div className="container blogs">
          <div className="title">
            <h6>Blogs</h6>
          </div>
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header active">
               First blog
              </div>
              <div className="collapsible-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias tempora nobis, amet ipsa qui officiis modi consequatur
                  reprehenderit expedita nihil ab recusandae, molestiae. 
                </p>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                Second blog
              </div>
              <div className="collapsible-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  iure ratione facilis sapiente est, repellendus nesciunt
                  voluptatum tempore magni natus, eius, cumque voluptates illo
                  earum libero obcaecati, deleniti ducimus similique accusamus!
                  Autem totam ipsa minus modi sed tempora porro. 
                   
                </p>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
               Third blog
              </div>
              <div className="collapsible-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam ullam asperiores illo, neque, et possimus, laudantium
                  excepturi non sunt necessitatibus cum perferendis atque? Nihil
                  aut adipisci non perferendis fuga voluptatem mollitia. 
                </p>
              </div>
            </li>
          </ul>
        </div>

        
      </main>

      <footer className="page-footer blue">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Material Profile</h5>
              <p className="grey-text text-lighten-4">Imei Wallet INT</p>
            </div>
            <div className="col l4 offset-l2 s12"></div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            &copy; 2023 Copyright <br />
            <a className="grey-text text-lighten-4 right" href="#!">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfileScreen;
