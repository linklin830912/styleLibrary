import React from "react";
import style from "./styles/mockPagingContentStyle.module.css";

type mockPagingContentProps = {
  width: any;
};

function MockPagingContent(props: mockPagingContentProps) {
  return (
    <div className={style.container_div} style={{ width: props.width }}>
      <article className={style.article}>
        <section>
          <h3>header 1</h3>
          <p className={style.p}>
            dkfhekhv; dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv;
            dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv;
            dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv;
            dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf
          </p>
        </section>
        <section>
          <h3>header 2</h3>
          <p className={style.p}>
            dkfhekhv; dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv;
            dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv;
            dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv;
            dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf
          </p>
        </section>
        <section>
          <h3>header 3</h3>
          <p className={style.p}>
            dkfhekhv; dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv;
            dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv;
            dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv;
            dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf
          </p>
        </section>
        <section>
          <h3>header 4</h3>
          <p className={style.p}>
            dkfhekhv; dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv;
            dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv;
            dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf dkfhekhv;
            dkglfgh ;jdglshlgh djglsdhgh dlsljlkgdjlkshgl f;kjgwhglk
            dlkjgsnoigusougo difyrgrdgfdgdrtrt rtvrevyyfnsoidyguseeiuf
          </p>
        </section>
      </article>
    </div>
  );
}

export default MockPagingContent;
