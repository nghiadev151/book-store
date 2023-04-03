const product = [
    {
      id: 1,
      name: "Doraemon",
      price: "1000",
      author: "Jonathan",
      img: "https://product.hstatic.net/200000346773/product/ed7ca4c4fe284d3a9a4e14d3f724a97e_5c71b000b5e24b3ebca50ea69f912d18_grande.jpeg",
      description: "Preparing for school doesn't have to be a chore. Introducing All Ready for Preschool, a comprehensive collection of activities, hands-on tools, and more! Vibrantly designed around a kid-friendly family theme, this kit includes preschool essentials conveniently bundled in a sturdy carrying case for learning at home or on the go. The Parent Guide is structured upon an easy-to-follow Ready, Set, Go lesson framework, which eases your child into grade-appropriate subjects through engaging activities and games that progress in difficulty. Best of all, it coordinates with your child's write-and-wipe Activity Book, ensuring that both of you remain on ''the same page. Ready? Set? Go! It's time to help your child take the next step!",
    },
  ];

const initialState = {
    products: [...product],
    quantityItem: 1,
}
function reducer(state, action) {
    switch (action.type) {
        case 'SET_QUANTITY' : 
        console.log("quanRedu: "+action.payload);
            return {
                ...state, 
                quantityItem: action.payload
            }
        default:
            return state;
    }
}
export { initialState}
export default reducer;