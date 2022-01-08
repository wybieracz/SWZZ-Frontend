const Circle = () => {
    return (
        <svg version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="200px" height="200px" viewBox="0 0 200 200">
        <ellipse fill="#009EFF" ry="100" rx="100" cy="100" cx="100" />
        </svg>
    )
}

const Triangle = () => {
    return (
        <svg version="1.1" id="triangle" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="200px" height="200px" viewBox="0 0 200 200">
        <path fill="#FFB531" d="m0.53728,187.23322l99.46271,-174.46642l99.46271,174.46642l-198.92543,0z" />
        </svg>
    )
}

const Diamond = () => {
    return (
        <svg version="1.1" id="triangle" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="200px" height="200px" viewBox="0 0 200 200">
        <path fill="#FF2C4B" d="m1.35188,100l98.64813,-98.64815l98.64813,98.64815l-98.64813,98.64815l-98.64813,-98.64815z" />
        </svg>
    )
}


export { Circle, Triangle, Diamond }