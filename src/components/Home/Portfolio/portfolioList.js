export const portfolioList = [
    { id: 1, title: "ALL", active: "li-active" },
    { id: 2, title: "Web development", active: "" },
    { id: 3, title: "HTML", active: "" },
    { id: 4, title: "UI/UX", active: "" },
    { id: 5, title: "Web Design", active: "" },
];
export const portfolioImgList = [
    { id: 1, img: "./img/portfolio-1.png", categorie: "Web development" },
    { id: 2, img: "./img/portfolio-2.png", categorie: "HTML" },
    { id: 3, img: "./img/portfolio-3.png", categorie: "UI/UX" },
    { id: 4, img: "./img/portfolio-4.png", categorie: "Web Design" },
    { id: 5, img: "./img/portfolio-5.png", categorie: "Web Design" },
    { id: 6, img: "./img/portfolio-6.png", categorie: "Web development" },
];
export const Arrow = () => {
    return (
        <>
            <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="32.283"
                height="15.334"
                viewBox="0 0 32.283 15.334"
            >
                <path
                    id="arrow"
                    data-name="Path 115"
                    d="M21.979,48.851,15.348,42.22a1.036,1.036,0,0,0-1.465,1.465l4.862,4.862H-8.964A1.036,1.036,0,0,0-10,49.583a1.036,1.036,0,0,0,1.036,1.036H18.745l-4.862,4.862a1.036,1.036,0,0,0,1.465,1.465l6.631-6.631A1.036,1.036,0,0,0,21.979,48.851Z"
                    transform="translate(10 -41.916)"
                    fill="#ff4900"
                />
            </svg>
        </>
    );
};
