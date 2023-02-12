import {useRef,useState,useEffect} from 'react'

export function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    let current = domRef.current
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
