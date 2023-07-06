const Template = (props: any) => {
    return (
        <div className="container">
            <div className="wrapper">
                {props.children}
            </div>
        </div>
    )
}

export default Template;
