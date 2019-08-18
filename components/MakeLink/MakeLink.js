import Link from 'next/link';

const MakeLink = props => {
    const { href, children, ...rest } = props
    const child = React.cloneElement(children, rest);
    return (<Link href={href}>{child}</Link>);
}

export default MakeLink;