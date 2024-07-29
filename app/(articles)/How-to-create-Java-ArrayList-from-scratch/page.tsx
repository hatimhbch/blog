"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import hljs from 'highlight.js';
import '@/app/(articles)/github.css';
import '@/app/(articles)/page.css';

import profile from '@/app/(articles)/images/profile.svg';
import heart from '@/app/(articles)/images/heart-svgrepo-com.svg';
import comment from '@/app/(articles)/images/comment-svgrepo-com.svg';
import link from '@/app/(articles)/images/link-minimalistic-svgrepo-com.svg';
import play from '@/app/(articles)/images/play-circle-svgrepo-com.svg';
import bookmark from '@/app/(articles)/images/bookmark-svgrepo-com.svg';
import Head from 'next/head';
import Metadata from '../Metadata';

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const highlightedCode = hljs.highlight(code, { language }).value;

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};


const ArrayListTutorial = () => {
  return (
    <>
      <Metadata seoTitle={'How to create Java ArrayList from scratch'} seoDescription={'ArrayList is a part of Java’s collection framework and provides a way to store dynamically-sized collections of objects. This tutorial covers the basics of ArrayList, including its methods and usage examples, to help you understand and utilize it effectively in your Java applications.'} />

      <div className="listoficonsreact">
        <div className="artinfo-user-art">
          <Image src={profile} alt="Profile" />
          <div className="aua-date-time">
            <p>Hatim Habchaoui</p>
            <h3>Estimated reading time: 15 min</h3>
          </div>
        </div>
        <div className="like-com-au-sv">
          <div className="react-comment">
            <div className="imgnum"><Image src={heart} alt="Heart" /><p>45</p></div>
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
        <h1>How to create Java ArrayList from scratch</h1>

        <p>ArrayList is a part of Java’s collection framework and provides a way to store dynamically-sized collections of objects. It implements the List interface and is known for its resizable array implementation. This tutorial covers the basics of ArrayList, including its methods and usage examples, to help you understand and utilize it effectively in your Java applications.</p>

        <h2>Introduction to ArrayList</h2>
        <p>The ArrayList class in Java provides a way to store a list of elements in a dynamic array that can grow as needed. It implements the List interface and allows for fast random access to elements.</p>

        <h2>Creating an ArrayList</h2>
        <p>To use ArrayList, you first need to import it from the java.util package. Here’s a basic example:</p>
        <pre>
          <CodeBlock
            language="java"
            code={`import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");

        System.out.println(list); // Output: [Java, Python, C++]
    }
}`}
          />
        </pre>

        <h2>Common Methods of ArrayList</h2>
        <p>ArrayList provides a number of useful methods:</p>
        <ul>
          <li><strong>add(E e):</strong> Adds an element to the end of the list.</li>
          <li><strong>get(int index):</strong> Retrieves the element at the specified position.</li>
          <li><strong>set(int index, E element):</strong> Replaces the element at the specified position with the specified element.</li>
          <li><strong>remove(int index):</strong> Removes the element at the specified position.</li>
          <li><strong>size():</strong> Returns the number of elements in the list.</li>
          <li><strong>clear():</strong> Removes all elements from the list.</li>
        </ul>

        <h3>Example of Adding and Accessing Elements</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");

        System.out.println("List: " + list);
        System.out.println("First element: " + list.get(0));
    }
}`}
          />
        </pre>

        <h3>Example of Removing and Modifying Elements</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");

        list.remove("Python");
        list.set(1, "JavaScript");

        System.out.println("Updated list: " + list);
    }
}`}
          />
        </pre>

        <h2>Iterating Over an ArrayList</h2>
        <p>There are multiple ways to iterate over an ArrayList:</p>
        <ul>
          <li><strong>For Loop:</strong> Traditional loop to access elements by index.</li>
          <li><strong>Enhanced For Loop:</strong> Simplified syntax to iterate over elements.</li>
          <li><strong>Iterator:</strong> Provides a way to traverse elements.</li>
        </ul>

        <h3>Example of Iterating Using a For Loop</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");

        for (int i = 0; i < list.size(); i++) {
            System.out.println("Element at index " + i + ": " + list.get(i));
        }
    }
}`}
          />
        </pre>

        <h3>Example of Iterating Using Enhanced For Loop</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");

        for (String language : list) {
            System.out.println(language);
        }
    }
}`}
          />
        </pre>

        <h3>Example of Iterating Using Iterator</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`import java.util.ArrayList;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");

        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}`}
          />
        </pre>

        <h2>ArrayList vs. Arrays</h2>
        <p>While arrays are a fundamental part of Java, ArrayList offers more flexibility and built-in methods. Key differences include:</p>
        <ul>
          <li><strong>Size:</strong> Arrays have a fixed size, whereas ArrayList can grow dynamically.</li>
          <li><strong>Methods:</strong> ArrayList provides various methods for manipulation, while arrays do not.</li>
          <li><strong>Performance:</strong> ArrayList has overhead due to its dynamic nature, while arrays are more memory-efficient.</li>
        </ul>

        <h3>Example of Using an Array</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`public class Main {
    public static void main(String[] args) {
        String[] array = {"Java", "Python", "C++"};
        
        for (String language : array) {
            System.out.println(language);
        }
    }
}`}
          />
        </pre>

        <h3>Comparing with ArrayList</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");
        
        for (String language : list) {
            System.out.println(language);
        }
    }
}`}
          />
        </pre>

        <h2>Best Practices and Tips</h2>
        <ul>
          <li>Use ArrayList when you need a dynamically-sized collection.</li>
          <li>Prefer ArrayList over arrays if you need built-in methods for manipulation.</li>
          <li>Always initialize ArrayLists with a specific capacity if the size is known to improve performance.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>ArrayList is a versatile and essential part of Java’s collection framework. By understanding its methods, iteration techniques, and performance considerations, you can effectively manage collections of data in your Java applications. Mastering ArrayList will help you write more efficient and flexible code.</p>
      </div>
    </>
  );
};

export default ArrayListTutorial;