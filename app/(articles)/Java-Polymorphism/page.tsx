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

const JavaPolymorphism = () => {
  return (
    <>
      <Metadata seoTitle={'Understanding Polymorphism in Java: A Comprehensive Guide'} seoDescription={'Polymorphism is a core concept in Java that allows objects to be treated as instances of their parent class rather than their actual class. This capability promotes flexibility and the ability to extend software systems with minimal changes. This comprehensive guide will delve into the concept of polymorphism in Java, its types, examples, and best practices.'} />

      <div className="listoficonsreact">
        <div className="artinfo-user-art">
          <Image src={profile} alt="Profile" />
          <div className="aua-date-time">
            <p>Hatim Habchaoui</p>
            <h3>Estimated reading time: 12 min</h3>
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
        <h1>Understanding Polymorphism in Java: A Comprehensive Guide</h1>

        <p>Polymorphism is a core concept in Java that allows objects to be treated as instances of their parent class rather than their actual class. This capability promotes flexibility and the ability to extend software systems with minimal changes. This comprehensive guide will delve into the concept of polymorphism in Java, its types, examples, and best practices.</p>

        <h2>Introduction to Polymorphism</h2>
        <p>Polymorphism means "many shapes" in Greek and refers to the ability of a single function, method, or operator to operate in different ways based on the context. In Java, polymorphism is categorized into two main types:</p>
        <ul>
          <li><strong>Compile-Time Polymorphism (Method Overloading):</strong> This type occurs when multiple methods in the same class have the same name but different parameters.</li>
          <li><strong>Runtime Polymorphism (Method Overriding):</strong> This type occurs when a subclass provides a specific implementation of a method that is already defined in its superclass.</li>
        </ul>

        <h2>Compile-Time Polymorphism</h2>
        <p>Compile-time polymorphism is achieved through method overloading. Method overloading allows multiple methods to have the same name but differ in the number or type of their parameters. The correct method is chosen at compile time based on the method signature.</p>

        <h3>Example of Method Overloading</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`class MathOperation {
  // Method with two integer parameters
  public int add(int a, int b) {
    return a + b;
  }

  // Overloaded method with three integer parameters
  public int add(int a, int b, int c) {
    return a + b + c;
  }

  // Overloaded method with two double parameters
  public double add(double a, double b) {
    return a + b;
  }
}

public class Main {
  public static void main(String[] args) {
    MathOperation op = new MathOperation();
    System.out.println(op.add(5, 10)); // Output: 15
    System.out.println(op.add(5, 10, 15)); // Output: 30
    System.out.println(op.add(5.5, 10.5)); // Output: 16.0
  }
}`}
          />
        </pre>

        <h2>Runtime Polymorphism</h2>
        <p>Runtime polymorphism is achieved through method overriding. Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. The method to be executed is determined at runtime based on the object type.</p>

        <h3>Example of Method Overriding</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`class Animal {
  public void sound() {
    System.out.println("Animal makes a sound");
  }
}

class Dog extends Animal {
  @Override
  public void sound() {
    System.out.println("Dog barks");
  }
}

class Cat extends Animal {
  @Override
  public void sound() {
    System.out.println("Cat meows");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal myDog = new Dog();
    Animal myCat = new Cat();

    myDog.sound(); // Output: Dog barks
    myCat.sound(); // Output: Cat meows
  }
}`}
          />
        </pre>

        <h2>Benefits of Polymorphism</h2>
        <ul>
          <li><strong>Flexibility:</strong> Polymorphism provides flexibility by allowing objects to be manipulated through their parent class reference.</li>
          <li><strong>Code Reusability:</strong> It promotes code reusability and extension by enabling the use of a common interface.</li>
          <li><strong>Maintainability:</strong> It simplifies code maintenance by allowing the addition of new functionality without altering existing code.</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Use polymorphism to enhance the flexibility and scalability of your code.</li>
          <li>Prefer method overriding over method overloading when you need to provide specific implementations.</li>
          <li>Ensure that overridden methods in subclasses maintain the behavior contract established by the superclass.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Polymorphism is a fundamental concept in Java that enables objects to interact through common interfaces and methods while retaining their specific behaviors. Mastering polymorphism allows you to write more flexible, reusable, and maintainable code, enhancing the overall design and functionality of your Java applications.</p>
      </div>
    </>
  );
};

export default JavaPolymorphism;