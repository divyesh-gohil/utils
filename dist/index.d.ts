/// <reference types="react" />
interface cardProps {
    name: string;
    height: number;
    weight: number;
    location: string;
}
declare const Card: (props: cardProps) => JSX.Element;

export { Card };
