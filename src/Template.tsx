import Background from "./Background";
const Template = (props: any) => {
    return (
        <div className="container">
            <div className="wrapper">
                <Background />

                {props.children}
            </div>
        </div>
    )
}

export default Template;
