// src/components/Hello.tsx
import React from "react";

type Props = {
  name: string;
};

export default function Hello(props: Props) {
  return <div>Hello, {props.name}.</div>;
}

// 補足: 以下と同等
// return createElement("div", { children: `Hello, ${props.name}.` });

// 関数定義時に次のように書くと、
// > Hello({ name }: { name: string })
// 関数内でprops.name ではなく、nameで参照できて便利です。