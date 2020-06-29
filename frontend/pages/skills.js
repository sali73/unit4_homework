
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
const Skills = (props) => {
    return (
        <Layout>
            <h1 style={{ textAlign:'center'}}>WELCOME TO SKILLS PAGE </h1>
            <ul >
                {props.descriptions
                    ? props.descriptions.map((index, key) => {
                        
                        return (
                            <>
                                <li> Id:{index.id}</li>
                                <li>User: {index.User}</li>
                                <li>skill_level: {index.skill_level}</li>
                                <li>Description : {index.description}</li>  
                            </>
                        )
                    })
                    : "Loading..."
                    }
             </ul>
        </Layout>
    )
};

Skills.getInitialProps = async (props) => {
    let res, data, descriptions ;
    try{
        res = await fetch('http://127.0.0.1:8000/api/v1/description/');
        data = await res.json();
        descriptions = data.objects
    } catch(error){
        console.error(error);
    }
    return {
        descriptions 
    }
};
export default Skills;