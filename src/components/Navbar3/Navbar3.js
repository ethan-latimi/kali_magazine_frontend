import React from "react";
import Header3 from '../header3/Header3';

export default function Navbar3(props) {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

  return (
    <div className={className}>
        <Header3 hclass={props.hclass} Logo={props.Logo} topbarNone={props.topbarNone} />
    </div>
  ); 
}