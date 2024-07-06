export default function Tabs({ buttons, children, buttonsContainer="div" }) {
    const ButtonsContianer = buttonsContainer; //as starting with smaller case react thinks built in
    //alternate is direct props name as capital at starting and directly assign that inside <>
    return (
        <>
            <ButtonsContianer>{buttons}</ButtonsContianer>
            {children}
        </>
    );
}
