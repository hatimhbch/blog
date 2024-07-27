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


const JavaInheritance = () => {
  return (
    <>
      <Metadata seoTitle={'Java Inheritance Tutorial: explained with examples'} seoDescription={'Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class to inherit fields and methods from another class. In Java, inheritance facilitates code reusability and establishes a natural hierarchy between classes. This guide will explore inheritance in Java, its types, and practical examples to help you understand and apply inheritance effectively in your Java applications.'} />

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
            <div className="imgnum"><Image src={heart} alt="Heart" /><p>30</p></div>
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
        <h1>Java Inheritance Tutorial: explained with examples</h1>

        <p>Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class to inherit fields and methods from another class. In Java, inheritance facilitates code reusability and establishes a natural hierarchy between classes. This guide will explore inheritance in Java, its types, and practical examples to help you understand and apply inheritance effectively in your Java applications.</p>

        <h2>Introduction to Inheritance</h2>
        <p>Inheritance allows a class (known as a subclass or derived class) to inherit the properties and behaviors of another class (known as a superclass or base class). This mechanism promotes code reuse and creates a natural hierarchy among classes.</p>

        <h2>Types of Inheritance</h2>
        <p>Java supports several types of inheritance:</p>
        <ul>
          <li><strong>Single Inheritance:</strong> A subclass inherits from one superclass.</li>
          <li><strong>Multilevel Inheritance:</strong> A subclass inherits from another subclass, forming a chain of inheritance.</li>
          <li><strong>Hierarchical Inheritance:</strong> Multiple subclasses inherit from a single superclass.</li>
          <li><strong>Multiple Inheritance (through Interfaces):</strong> Java does not support multiple inheritance with classes but allows it through interfaces.</li>
        </ul>

        <h3>Single Inheritance</h3>
        <p>In single inheritance, a class inherits from one superclass. This is the simplest form of inheritance. Here's an example:</p>
        <pre>
          <CodeBlock
            language="java"
            code={`// Superclass
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

// Subclass
class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // Inherited method
        dog.bark(); // Subclass method
    }
}`}
          />
        </pre>

        <h3>Multilevel Inheritance</h3>
        <p>In multilevel inheritance, a class inherits from a subclass, forming a chain. Here's an example:</p>
        <pre>
          <CodeBlock
            language="java"
            code={`// Grandparent class
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

// Parent class
class Mammal extends Animal {
    void sleep() {
        System.out.println("This mammal sleeps.");
    }
}

// Child class
class Dog extends Mammal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();   // Inherited from Animal
        dog.sleep(); // Inherited from Mammal
        dog.bark();  // Own method
    }
}`}
          />
        </pre>

        <h3>Hierarchical Inheritance</h3>
        <p>In hierarchical inheritance, multiple subclasses inherit from a single superclass. Here's an example:</p>
        <pre>
          <CodeBlock
            language="java"
            code={`// Superclass
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

// Subclass 1
class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

// Subclass 2
class Cat extends Animal {
    void meow() {
        System.out.println("The cat meows.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // Inherited method
        dog.bark(); // Subclass method

        Cat cat = new Cat();
        cat.eat(); // Inherited method
        cat.meow(); // Subclass method
    }
}`}
          />
        </pre>

        <h3>Multiple Inheritance (through Interfaces)</h3>
        <p>Java does not support multiple inheritance with classes to avoid complexity and ambiguity. However, multiple inheritance is possible through interfaces. Here's an example:</p>
        <pre>
          <CodeBlock
            language="java"
            code={`// Interface 1
interface Animal {
    void eat();
}

// Interface 2
interface Pet {
    void play();
}

// Class implementing multiple interfaces
class Dog implements Animal, Pet {
    @Override
    public void eat() {
        System.out.println("The dog eats.");
    }

    @Override
    public void play() {
        System.out.println("The dog plays.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // Method from Animal interface
        dog.play(); // Method from Pet interface
    }
}`}
          />
        </pre>

        <h2>Access Modifiers in Inheritance</h2>
        <p>Java provides access modifiers that control the visibility of class members. These modifiers affect inheritance as follows:</p>
        <ul>
          <li><strong>Public:</strong> Members are accessible from any class.</li>
          <li><strong>Protected:</strong> Members are accessible within the same package and by subclasses.</li>
          <li><strong>Default (Package-Private):</strong> Members are accessible only within the same package.</li>
          <li><strong>Private:</strong> Members are not accessible outside the class.</li>
        </ul>

        <h3>Example of Access Modifiers</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`// Superclass
class Animal {
    public void publicMethod() {
        System.out.println("Public method");
    }

    protected void protectedMethod() {
        System.out.println("Protected method");
    }

    void defaultMethod() {
        System.out.println("Default method");
    }

    private void privateMethod() {
        System.out.println("Private method");
    }
}

// Subclass
class Dog extends Animal {
    void accessMethods() {
        publicMethod();    // Accessible
        protectedMethod(); // Accessible
        defaultMethod();   // Accessible
        // privateMethod(); // Not accessible
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.accessMethods();
    }
}`}
          />
        </pre>

        <h2>Method Overriding and Super Keyword</h2>
        <p>Method overriding allows a subclass to provide a specific implementation for a method already defined in its superclass. The <code>super</code> keyword is used to call the superclass's method from the subclass.</p>

        <h3>Example of Method Overriding</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`// Superclass
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

// Subclass
class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound(); // Output: Dog barks
    }
}`}
          />
        </pre>

        <h3>Using the Super Keyword</h3>
        <pre>
          <CodeBlock
            language="java"
            code={`// Superclass
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

// Subclass
class Dog extends Animal {
    @Override
    void sound() {
        super.sound(); // Calling superclass method
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound(); 
        // Output:
        // Animal makes a sound
        // Dog barks
    }
}`}
          />
        </pre>

        <h2>Best Practices and Tips</h2>
        <ul>
          <li>Avoid deep inheritance hierarchies as they can make code harder to understand and maintain.</li>
          <li>Prefer composition over inheritance when it makes sense.</li>
          <li>Use abstract classes and interfaces to design flexible and extensible systems.</li>
          <li>Ensure that overridden methods maintain the behavior of the superclass method.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Inheritance is a powerful feature in Java that enables code reuse and establishes a hierarchy between classes. By understanding and applying inheritance correctly, you can create more organized, maintainable, and efficient code. Mastering inheritance will help you leverage object-oriented programming principles effectively in your Java applications.</p>
      </div>
    </>
  );
};

export default JavaInheritance;
