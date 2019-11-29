import { LitElement, html, css } from "lit-element";
import "./mv-tab.js";

export class MvTabDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
    `;
  }

  render() {
    return html`
    <mv-tab group>
      <mv-tab tab key="html">HTML</mv-tab>
      <mv-tab content key="html">
        <p>The most common filename extension for files containing HTML is .html. A common abbreviation of this is .htm,
          which originated because some early operating systems and file systems, such as DOS and the limitations imposed
          by FAT data structure, limited file extensions to three letters.</p>
        <p>There are two axes differentiating various variations of HTML as currently specified: SGML-based HTML versus
          XML-based HTML (referred to as XHTML) on one axis, and strict versus transitional (loose) versus frameset on the
          other axis.</p>
        <p>To understand the subtle differences between HTML and XHTML, consider the transformation of a valid and
          well-formed XHTML 1.0 document that adheres to Appendix C (see below) into a valid HTML 4.01 document. To make
          this translation requires the following steps:</p>
        <p>Those are the main changes necessary to translate a document from XHTML 1.0 to HTML 4.01. To translate from
          HTML to XHTML would also require the addition of any omitted opening or closing tags. Whether coding in HTML or
          XHTML it may just be best to always include the optional tags within an HTML document rather than remembering
          which tags can be omitted.</p>
        <p>A well-formed XHTML document adheres to all the syntax requirements of XML. A valid document adheres to the
          content specification for XHTML, which describes the document structure.</p>
      </mv-tab>
      <mv-tab tab key="css">CSS</mv-tab>
      <mv-tab content key="css">
        <p>As websites adopt newer code standards that are incompatible with older browsers, these browsers can be cut off
          from accessing many of the resources on the web (sometimes intentionally). Many of the most popular sites on the
          internet are not just visually degraded on older browsers due to poor CSS support, but do not work at all, in
          large part due to the evolution of JavaScript and other web technologies.</p>
        <p>As the size of CSS resources used in a project increases, a development team often needs to decide on a common
          design methodology to keep them organized. The goals are ease of development, ease of collaboration during
          development and performance of the deployed stylesheets in the browser. Popular methodologies include OOCSS
          (object oriented CSS), ACSS (atomic CSS), oCSS (organic Cascade Style Sheet), SMACSS (scalable and modular
          architecture for CSS), and BEM (block, element, modifier).</p>
        <ul>
          <li>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document
            written in a markup language like HTML.</li>
          <li>CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.
            This separation can improve content accessibility, provide more flexibility and control in the specification
            of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS
            in a separate .css file, and reduce complexity and repetition in the structural content.</li>
          <li>Separation of formatting and content also makes it feasible to present the same markup page in different
            styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or
            screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the
            content is accessed on a mobile device.</li>
        </ul>
      </mv-tab>
      <mv-tab tab key="javascript" disabled>Javascript</mv-tab>
      <mv-tab content key="javascript">
        <ul>
          <li>So, along with Macromedia, work restarted on ECMAScript 4 with the goal of standardizing what was in
            ActionScript 3. To this end, Adobe Systems released the ActionScript Virtual Machine 2, code named Tamarin, as
            an open source project. But Tamarin and ActionScript 3 were too different from web JavaScript to converge, as
            was realized by the parties in 2007 and 2008.</li>
          <li>Alas, there was still turmoil between the various players; Douglas Crockford—then at Yahoo!—joined forces
            with Microsoft in 2007 to oppose ECMAScript 4, which led to the ECMAScript 3.1 effort. The development of
            ECMAScript 4 was never completed, but that work influenced subsequent versions.</li>
          <li>In July 2008, the disparate parties on either side came together in Oslo. This led to the eventual agreement
            in early 2009 to rename ECMAScript 3.1 to ECMAScript 5 and drive the language forward using an agenda that is
            known as Harmony. ECMAScript 5 was finally released in December 2009.</li>
          <li>In June 2011, ECMAScript 5.1 was released to fully align with the third edition of the ISO/IEC 16262
            international standard. ECMAScript 2015 was released in June 2015. ECMAScript 2016 was released in June 2016.
            The current version is ECMAScript 2017, released in June 2017.</li>
          <li>JavaScript has become one of the most popular programming languages on the Web. However, many professional
            programmers initially denigrated the language due to the perceived target audience of Web authors and other
            such "amateurs". The advent of Ajax returned JavaScript to the spotlight and brought more professional
            programming attention. The result was a proliferation of comprehensive frameworks and libraries, improved
            JavaScript programming practices, and increased usage of JavaScript outside Web browsers, as seen by the
            proliferation of Server-side JavaScript platforms.</li>
        </ul>
      </mv-tab>
    </mv-tab>
    `;
  }
}

customElements.define("mv-tab-demo", MvTabDemo);
