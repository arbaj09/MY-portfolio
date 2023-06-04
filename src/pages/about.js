import "./about.css";

const About = () => {
  let imageStyle = {
    height: "59rem",
    width: "100rem",

    backgroundImage:
    'url("https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white", 
    
    
 };
  
  
  
  
  
  

  
  return (
    <>
      <div className="Container-about">
      

        <div className="about" style={imageStyle}>
          <h1>About</h1>
     
          <p className="Para-One">
            "Hello! I'm <b>Arbaj Shaikh</b> a skilled React developer and
            experienced full-stack developer. 
            With a focus on creating dynamic
            and interactive user interfaces, </p> 
            <p className="para-Two">I specialize in leveraging the       
            power of React to build engaging web applications. 
            I have a strong
            command of HTML, CSS, and JavaScript, allowing me to 
            craft intuitive
            and responsive UIs that deliver exceptional user 
            experiences. </p>
      
       
        </div>
      </div>
    </>
  );
};
export default About;
