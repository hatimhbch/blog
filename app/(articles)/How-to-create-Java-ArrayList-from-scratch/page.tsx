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

const LearningProgramming = () => {
  return (
    <>
      <Metadata
        seoTitle={'Exploring the World of ArrayList in Java'}
        seoDescription={
          'Dive into the fundamentals and advanced features of ArrayList in Java. Understand how to create, manipulate, and optimize ArrayLists in your Java projects.'
        }
      />

      <div className="listoficonsreact">
        <div className="artinfo-user-art">
          <Image src={profile} alt="Profile" />
          <div className="aua-date-time">
            <p>Your Name</p>
            <h3>Estimated reading time: 15 min</h3>
          </div>
        </div>
        <div className="like-com-au-sv">
          <div className="react-comment">
            <div className="imgnum">
              <Image src={heart} alt="Heart" />
              <p>50</p>
            </div>
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
        <h1>Exploring the World of ArrayList in Java</h1>

        <p>
          Hello there, fellow tech enthusiasts! Today, I am excited to delve
          into the world of ArrayList in Java with you. As a Java developer, I
          have always found ArrayList to be a versatile and powerful tool in my
          programming arsenal. So grab a cup of coffee, sit back, and let's
          explore the ins and outs of ArrayList in Java together!
        </p>

        <p>
          ArrayList is a class in Java that is part of the Java Collections
          Framework. It is a resizable array implementation that provides
          dynamic arrays in Java. This means that unlike traditional arrays in
          Java, ArrayList can grow or shrink in size dynamically as elements are
          added or removed.
        </p>

        <p>
          One of the key advantages of using ArrayList in Java is its
          flexibility. You can store any type of objects in an ArrayList, making
          it a versatile data structure for storing and manipulating collections
          of elements. Whether you need to store integers, strings, custom
          objects, or even other ArrayLists, ArrayList has got you covered.
        </p>

        <p>
          To create an ArrayList in Java, you simply need to declare and
          initialize it like this:
        </p>

        <CodeBlock
          language="java"
          code={`ArrayList<String> myArrayList = new ArrayList<>();`}
        />

        <p>
          In this example, we are creating an ArrayList that can store strings.
          The angle brackets <code>&lt;String&gt;</code> denote the type of
          elements that the ArrayList can hold. You can replace{' '}
          <code>String</code> with any other data type or class depending on
          your requirements.
        </p>

        <p>
          Adding elements to an ArrayList is a breeze. You can use the{' '}
          <code>add()</code> method to add elements to the end of the ArrayList
          like so:
        </p>

        <CodeBlock
          language="java"
          code={`myArrayList.add("Java");
myArrayList.add("is");
myArrayList.add("awesome");`}
        />

        <p>
          With these lines of code, we have added the strings "Java", "is", and
          "awesome" to our ArrayList. The elements are added in the order in
          which they are inserted.
        </p>

        <p>
          Accessing elements in an ArrayList is straightforward as well. You can
          use the <code>get()</code> method to retrieve elements at a specific
          index in the ArrayList. Remember, ArrayList is zero-based, which means
          the first element is at index 0.
        </p>

        <CodeBlock
          language="java"
          code={`String firstElement = myArrayList.get(0); // Retrieves the first element "Java"
String secondElement = myArrayList.get(1); // Retrieves the second element "is"`}
        />

        <p>
          You can also update elements in an ArrayList by using the{' '}
          <code>set()</code> method. This method replaces the element at a
          specified index with a new element.
        </p>

        <CodeBlock
          language="java"
          code={`myArrayList.set(2, "amazing"); // Replaces "awesome" with "amazing"`}
        />

        <p>
          Removing elements from an ArrayList can be done using the{' '}
          <code>remove()</code> method. You can remove elements based on their
          index or their value.
        </p>

        <CodeBlock
          language="java"
          code={`myArrayList.remove(0); // Removes the first element "Java"
myArrayList.remove("is"); // Removes the element with the value "is"`}
        />

        <p>
          When working with ArrayList in Java, it's important to be mindful of
          its performance characteristics. While ArrayList provides fast access
          to elements by index, inserting or removing elements in the middle of
          the ArrayList can be inefficient since it requires shifting elements
          to accommodate the change in size.
        </p>

        <p>
          If you find yourself frequently inserting or removing elements in the
          middle of a collection, you may want to consider using a different
          data structure such as LinkedList, which provides faster insertion and
          removal operations at the cost of slower element access by index.
        </p>

        <p>
          Another important aspect to consider when working with ArrayList is
          its capacity. ArrayList has an initial capacity that determines the
          number of elements it can hold before resizing is required. When the
          ArrayList reaches its capacity, it automatically increases its size to
          accommodate more elements.
        </p>

        <p>
          You can specify an initial capacity for an ArrayList by passing an
          integer value to the constructor when creating the ArrayList:
        </p>

        <CodeBlock
          language="java"
          code={`ArrayList<Integer> numbers = new ArrayList<>(10); // Creates an ArrayList with initial capacity of 10`}
        />

        <p>
          By specifying an initial capacity, you can potentially improve the
          performance of your ArrayList by reducing the number of resizing
          operations that need to be performed as elements are added.
        </p>

        <p>
          Iterating over elements in an ArrayList can be done using various
          methods such as the enhanced for loop, the Iterator interface, or the{' '}
          <code>forEach()</code> method introduced in Java 8. Let's take a look
          at each of these methods:
        </p>

        <h3>1. Enhanced for loop:</h3>

        <CodeBlock
          language="java"
          code={`for (String element : myArrayList) {
    System.out.println(element);
}`}
        />

        <h3>2. Iterator interface:</h3>

        <CodeBlock
          language="java"
          code={`Iterator<String> iterator = myArrayList.iterator();
while (iterator.hasNext()) {
    String element = iterator.next();
    System.out.println(element);
}`}
        />

        <h3>3. forEach() method:</h3>

        <CodeBlock
          language="java"
          code={`myArrayList.forEach(element -> System.out.println(element));`}
        />

        <p>
          Each of these methods allows you to iterate over the elements in an
          ArrayList and perform operations on them. Choose the method that best
          suits your requirements and coding style.
        </p>

        <p>
          Sorting elements in an ArrayList can be achieved using the{' '}
          <code>Collections.sort()</code> method. This method sorts the elements
          in the ArrayList based on their natural ordering or a custom Comparator
          that you provide.
        </p>

        <CodeBlock language="java" code={`Collections.sort(myArrayList); // Sorts the elements in natural order`} />

        <p>
          If you need to sort elements in a custom order, you can provide a
          Comparator implementation that defines the custom sorting logic.
        </p>

        <p>
          In conclusion, ArrayList is a powerful and flexible data structure in
          Java that provides dynamic arrays for storing and manipulating
          collections of elements. Its versatility, ease of use, and extensive
          features make it a popular choice among Java developers.
        </p>

        <p>
          I hope this article has provided you with a solid understanding of
          ArrayList in Java. Whether you're a beginner or an experienced Java
          developer, mastering ArrayList is an essential skill that will
          undoubtedly enhance your programming capabilities.
        </p>

        <p>
          Thank you for joining me on this journey into the world of ArrayList
          in Java. Until next time, happy coding!
        </p>
      </div>
    </>
  );
};

export default LearningProgramming;
