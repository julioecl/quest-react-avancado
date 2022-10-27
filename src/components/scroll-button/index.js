import { ButtonDefault } from '../button';
  
const ScrollButton = () =>{ 
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'      
    });
  };

  return (
    <ButtonDefault onClick={scrollToTop}> Scroll to top    
    </ButtonDefault>
  );
}
  
export default ScrollButton;


