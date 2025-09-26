"use client";

import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

export default function ImprintPage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    async function fetchAndParse() {
      const res = await fetch('/imprint.md');
      const text = await res.text();
      const html = await Promise.resolve(marked.parse(text));
      setContent(html);
    }
    fetchAndParse();
  }, []);

  return (
  <main className="prose mx-auto min-h-screen py-16 px-4 pt-[112px]" dangerouslySetInnerHTML={{ __html: content }} />
  );
}
