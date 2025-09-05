// PascalCasing

const FirstComponent = () => {
    // const  name = "Nadim";

    // Type 1:
    // if (name) {
    //     return (
    //         <>
    //             <h2>Hello {name}</h2>
    //         </>
    //     );
    // }

    // return (
    //     <>
    //         <h2>Hello World</h2>
    //     </>
    // );  



    // Type 2:
    // return (
    //     <>
    //         <h2>Hello { name ? name: "World" } </h2>
    //     </>
    // );  



    // Type 3:
    return (
        <>
            <h2>Hello { name && "World" } </h2>
            <h2>Hello { name || "World" } </h2>
        </>
    );  


}

export default FirstComponent;
