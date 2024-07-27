"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import hljs from 'highlight.js';
import '@/app/(articles)/github.css';
import '@/app/(articles)/page.css'

import profile from '@/app/(articles)/images/profile.svg';
import heart from '@/app/(articles)/images/heart-svgrepo-com.svg';
import comment from '@/app/(articles)/images/comment-svgrepo-com.svg';
import link from '@/app/(articles)/images/link-minimalistic-svgrepo-com.svg';
import play from '@/app/(articles)/images/play-circle-svgrepo-com.svg';
import bookmark from '@/app/(articles)/images/bookmark-svgrepo-com.svg';
import Head from 'next/head';
import Metadata from '../Metadata';
import Collection from '@/app/components/collection/collection';

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

const CollectionInJava = () => {
  return (
    <>
      <Metadata seoTitle={'Understanding Collections in Java: A Comprehensive Guide'} seoDescription={'Java Collections Framework provides a set of interfaces and classes for storing and manipulating groups of data as a single unit, a collection. Collections in Java are used to store, retrieve, manipulate, and communicate aggregate data. This comprehensive guide will delve into the various types of collections available in Java, their usage, examples, and best practices.'} />


      <div className="listoficonsreact">
        <div className="artinfo-user-art">
          <Image src={profile} alt="Profile" />
          <div className="aua-date-time">
            <p>Hatim Habchaoui</p>
            <h3>Estimated reading time: 9 min</h3>
          </div>
        </div>
        <div className="like-com-au-sv">
          <div className="react-comment">
            <div className="imgnum"><Image src={heart} alt="Heart" /><p>20</p></div>
            <Image id="comments" src={comment} alt="Comment" />
          </div>
          <div className="copy-aud-save">
            <Image src={link} alt="Link" />
            <Image src={play} alt="Play" />
            <Image src={bookmark} alt="Bookmark" />
          </div>
        </div>
      </div>

      <div className="artic">
        <h1>Understanding Collections in Java: A Comprehensive Guide</h1>

        <p>Java Collections Framework provides a set of interfaces and classes for storing and manipulating groups of data as a single unit, a collection. Collections in Java are used to store, retrieve, manipulate, and communicate aggregate data. This comprehensive guide will delve into the various types of collections available in Java, their usage, examples, and best practices.</p>

        <h2>Introduction to Java Collections Framework</h2>
        <p>The Java Collections Framework (JCF) is a unified architecture for representing and manipulating collections. It includes interfaces, implementations, and algorithms:</p>
        <ul>
          <li><strong>Interfaces:</strong> Represent abstract data types that define collections.</li>
          <li><strong>Implementations:</strong> Concrete implementations of the collection interfaces.</li>
          <li><strong>Algorithms:</strong> Methods to manipulate collections, such as sorting and searching.</li>
        </ul>

        <h2>Types of Collections</h2>
        <p>Collections can be classified into three main categories:</p>
        <ul>
          <li><strong>List:</strong> Ordered collections that can contain duplicate elements.</li>
          <li><strong>Set:</strong> Collections that cannot contain duplicate elements.</li>
          <li><strong>Map:</strong> Objects that map keys to values; cannot contain duplicate keys.</li>
        </ul>

        <h3>List Interface</h3>
        <p>The List interface provides methods to manipulate elements in the list, such as:</p>
        <pre>
          <CodeBlock
            language="java"
            code={`List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
list.add("Apple");
System.out.println(list); // Output: [Apple, Banana, Apple]`}
          />
        </pre>

        <h3>Set Interface</h3>
        <p>The Set interface represents a collection that does not allow duplicate elements. Here's an example using HashSet:</p>
        <pre>
          <CodeBlock
            language="java"
            code={`Set<String> set = new HashSet<>();
set.add("Apple");
set.add("Banana");
set.add("Apple"); // Duplicate element
System.out.println(set); // Output: [Apple, Banana]`}
          />
        </pre>

        <h3>Map Interface</h3>
        <p>The Map interface represents a collection of key-value pairs. Here's an example using HashMap:</p>
        <pre>
          <CodeBlock
            language="java"
            code={`Map<String, Integer> map = new HashMap<>();
map.put("Apple", 1);
map.put("Banana", 2);
map.put("Apple", 3); // Duplicate key, value is updated
System.out.println(map); // Output: {Apple=3, Banana=2}`}
          />
        </pre>

        <h2>Iterating Over Collections</h2>
        <p>Java provides several ways to iterate over collections:</p>
        <ul>
          <li><strong>Using Iterator:</strong> The Iterator interface provides methods to iterate over a collection.</li>
          <li><strong>Using Enhanced For Loop:</strong> The enhanced for loop (for-each loop) provides a simpler way to iterate over collections.</li>
          <li><strong>Using forEach Method:</strong> Java 8 introduced the forEach method that accepts a lambda expression.</li>
        </ul>

        <h3>Example of Using Iterator</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");

Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}`}
          />
        </pre>

        <h3>Example of Using Enhanced For Loop</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`for (String item : list) {
    System.out.println(item);
}`}
          />
        </pre>

        <h3>Example of Using forEach Method</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`list.forEach(item -> System.out.println(item));`}
          />
        </pre>

        <h2>Best Practices and Tips</h2>
        <ul>
          <li>Prefer generics for type safety.</li>
          <li>Use the most specific type that suits your needs (e.g., prefer List over ArrayList).</li>
          <li>Use immutable collections if the data does not change.</li>
          <li>Choose the appropriate collection type based on requirements (e.g., use HashSet for fast lookups).</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Understanding collections in Java is crucial for efficient data manipulation and storage. By mastering the Java Collections Framework, you can write more efficient, type-safe, and maintainable code.</p>
      </div>
      <div className="disflexcollection"><Collection /></div>
    </>
  );
};

export default CollectionInJava;
