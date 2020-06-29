import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
const Index = (props) => {
    return (
        <Layout>
            <h1 style={{ textAlign:'center'}}>WELCOME TO USER PAGE</h1>
            <ul >
                {props.users
                    ? props.users.map((user , key) => {
                        
                        return (
                            <>
                                <li> Id:{user.id}</li>
                                <li>Name : {user.name}</li>
                                <li>Email : {user.email}</li>
                                <li>Description : {user.description}</li>  
                                <li>skill_level: {user.skill_level}</li>
                            </>
                        )
                    })
                    : "Loading..."
                    }
             </ul>
        </Layout>
    )
}
Index.getInitialProps = async (props) => {
    let res, data, users;
    try{
        res = await fetch('http://127.0.0.1:8000/api/v1/user/');
        data = await res.json();
        users = data.objects
    } catch(error){
        console.error(error);
    }
    return {
        users
    }
};
export default Index;
