function customRender(reactElement , container){
    /* 
    // this code will creat problems if number of sttribute is not = 2
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href' , reactElement.props.href);
    domElement.setAttribute('target' , reactElement.props.target);

    container.appendChild(domElement); */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop , reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type : "a",
    props : {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Clicxk me to visit google'
}

//basically reactElement mean => <a href="https://google.com" tragert="_blank">Click me to visit google</>



const mainContainer = document.getElementById("root")

//customRender(kya-rebder-karna-hai , kaha-pe-inject-karna-hai)
customRender(reactElement , mainContainer);