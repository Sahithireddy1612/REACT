const TernaryComponent = ()=> {

    const login=false


    return(
        <>
        {
        login
        ?
        <button>loginTrue</button>
        :
        <button>loginfalse</button>
        }
</>
    );
    }
    export default TernaryComponent;