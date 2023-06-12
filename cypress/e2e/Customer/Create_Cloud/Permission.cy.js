
describe('Permission', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()
        cy.wait(3000);

    })

    context('Admin', () => {

        it('Action success', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin').click();
            cy.get('.pl-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > \
                .ant-table > .ant-table-container > .ant-table-body > table > .ant-table-tbody > [data-row-key="consent:list"] > \
                .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();

            cy.get('#rightToLeft').click();
            cy.get('[type="submit"]').click();
            cy.wait(700);

        })

        it('Usabilities (Admin select Filter Service. The system displays a list of each selected Filter.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin').click();
            cy.wait(300);
            cy.get('.ant-select-selector').click();
            cy.get(':nth-child(1) > .ant-select-item-option-content').click();
            cy.wait(700);

        })

        it('Usabilities (Admin search with Permission and Service both sides. The system displays the searched list.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin').click();
            cy.wait(300);
            cy.get('.pr-0 > .row > .ml-auto > #search').type('ticket');
            cy.get('.pl-0 > .row > .ml-auto > #search').type('new');
            cy.wait(700);

        })

        it('Usabilities (Admin check All Checkbox both sides. The system will select all item.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin').click();
            cy.wait(300);
            cy.get('.pr-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > \
                .ant-table > .ant-table-container > .ant-table-header > table > .ant-table-thead > tr > \
                .ant-table-selection-column > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check(); //All Checkbox left


            cy.get('.pl-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > \
                .ant-table > .ant-table-container > .ant-table-header > table > .ant-table-thead > tr > \
                .ant-table-selection-column > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check(); //All Checkbox right
           
            cy.wait(700);
        })

        it('Usabilities (Admin select item from left side. Right Arrow button = Active', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin').click();
            cy.wait(300);
            cy.get('[data-row-key="consent:list"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
            cy.get('#leftToRight').should('be.enabled');
            cy.wait(700);

        })

        it('Usabilities ( Admin select item and click Right Arrow button. The selected left data is disabled.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin').click();
            cy.wait(300);
            cy.get('[data-row-key="consent:list"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
            cy.get('#leftToRight').click();
            cy.get('[data-row-key="consent:list"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').should('be.disabled');

            cy.wait(700);
        })

        it('Usabilities ( Admin select item from Right side. Left Arrow button = Active', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin').click();
            cy.wait(300);
            cy.get('.pl-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-body > table > .ant-table-tbody > \
                    [data-row-key="consent:get"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();

            cy.get('#rightToLeft').should('be.enabled');

            cy.wait(700);

        })

        it('Usabilities (Admin select item and click Left Arrow button. Data on the left side that was disabled will return to Enable as usual.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin').click();
            cy.wait(300);
            cy.get('.pl-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-body > table > .ant-table-tbody > \
                    [data-row-key="consent:get"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
                    
            cy.get('#rightToLeft').click();
            cy.get('[data-row-key="consent:get"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').should('be.enabled')

            cy.wait(700);

        })
    })

    context('Admin Read Only', () => {

        it('Action success', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin-read-only/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin Read Only').click();
            cy.get('.pl-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > \
                .ant-table > .ant-table-container > .ant-table-body > table > .ant-table-tbody > [data-row-key="consent:list"] > \
                .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();

            cy.get('#rightToLeft').click();
            cy.get('[type="submit"]').click();
            cy.wait(700);

        })

        it('Usabilities (Admin select Filter Service. The system displays a list of each selected Filter.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin-read-only/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin Read Only').click();
            cy.wait(300);
            cy.get('.ant-select-selector').click();
            cy.get(':nth-child(1) > .ant-select-item-option-content').click();
            cy.wait(700);

        })

        it('Usabilities (Admin search with Permission and Service both sides. The system displays the searched list.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin-read-only/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin Read Only').click();
            cy.wait(300);
            cy.get('.pr-0 > .row > .ml-auto > #search').type('ticket');
            cy.get('.pl-0 > .row > .ml-auto > #search').type('new');
            cy.wait(700);

        })

        it('Usabilities (Admin check All Checkbox both sides. The system will select all item.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin-read-only/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin Read Only').click();
            cy.wait(300);
            cy.get('.pr-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > \
                .ant-table > .ant-table-container > .ant-table-header > table > .ant-table-thead > tr > \
                .ant-table-selection-column > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check(); //All Checkbox left


            cy.get('.pl-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > \
                .ant-table > .ant-table-container > .ant-table-header > table > .ant-table-thead > tr > \
                .ant-table-selection-column > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check(); //All Checkbox right
           
            cy.wait(700);
        })

        it('Usabilities (Admin select item from left side. Right Arrow button = Active', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin-read-only/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin Read Only').click();
            cy.wait(300);
            cy.get('[data-row-key="consent:list"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
            cy.get('#leftToRight').should('be.enabled');
            cy.wait(700);

        })

        it('Usabilities ( Admin select item and click Right Arrow button. The selected left data is disabled.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin-read-only/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin Read Only').click();
            cy.wait(300);
            cy.get('[data-row-key="consent:list"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
            cy.get('#leftToRight').click();
            cy.get('[data-row-key="consent:list"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').should('be.disabled');

            cy.wait(700);
        })

        it('Usabilities ( Admin select item from Right side. Left Arrow button = Active', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin-read-only/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin Read Only').click();
            cy.wait(300);
            cy.get('.pl-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-body > table > .ant-table-tbody > \
                    [data-row-key="consent:get"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();

            cy.get('#rightToLeft').should('be.enabled');

            cy.wait(700);

        })

        it('Usabilities (Admin select item and click Left Arrow button. Data on the left side that was disabled will return to Enable as usual.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/admin-read-only/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Admin Read Only').click();
            cy.wait(300);
            cy.get('.pl-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-body > table > .ant-table-tbody > \
                    [data-row-key="consent:get"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
                    
            cy.get('#rightToLeft').click();
            cy.get('[data-row-key="consent:get"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').should('be.enabled')

            cy.wait(700);

        })
    })

    context('Super Admin', () => {

        it('Action success', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/super-admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Super Admin').click();
            cy.get('.pl-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > \
                .ant-table > .ant-table-container > .ant-table-body > table > .ant-table-tbody > [data-row-key="consent:list"] > \
                .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();

            cy.get('#rightToLeft').click();
            cy.get('[type="submit"]').click();
            cy.wait(700);

        })

        it('Usabilities (Admin select Filter Service. The system displays a list of each selected Filter.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/super-admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Super Admin').click();
            cy.wait(300);
            cy.get('.ant-select-selector').click();
            cy.get(':nth-child(1) > .ant-select-item-option-content').click();
            cy.wait(700);

        })

        it('Usabilities (Admin search with Permission and Service both sides. The system displays the searched list.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/super-admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Super Admin').click();
            cy.wait(300);
            cy.get('.pr-0 > .row > .ml-auto > #search').type('ticket');
            cy.get('.pl-0 > .row > .ml-auto > #search').type('new');
            cy.wait(700);

        })

        it('Usabilities (Admin check All Checkbox both sides. The system will select all item.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/super-admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Super Admin').click();
            cy.wait(300);
            cy.get('.pr-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > \
                .ant-table > .ant-table-container > .ant-table-header > table > .ant-table-thead > tr > \
                .ant-table-selection-column > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check(); //All Checkbox left


            cy.get('.pl-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > \
                .ant-table > .ant-table-container > .ant-table-header > table > .ant-table-thead > tr > \
                .ant-table-selection-column > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check(); //All Checkbox right
           
            cy.wait(700);
        })

        it('Usabilities (Admin select item from left side. Right Arrow button = Active', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/super-admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Super Admin').click();
            cy.wait(300);
            cy.get('[data-row-key="consent:list"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
            cy.get('#leftToRight').should('be.enabled');
            cy.wait(700);

        })

        it('Usabilities ( Admin select item and click Right Arrow button. The selected left data is disabled.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/super-admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Super Admin').click();
            cy.wait(300);
            cy.get('[data-row-key="consent:list"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
            cy.get('#leftToRight').click();
            cy.get('[data-row-key="consent:list"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').should('be.disabled');

            cy.wait(700);
        })

        it('Usabilities ( Admin select item from Right side. Left Arrow button = Active', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/super-admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Super Admin').click();
            cy.wait(300);
            cy.get('.pl-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-body > table > .ant-table-tbody > \
                    [data-row-key="consent:get"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();

            cy.get('#rightToLeft').should('be.enabled');

            cy.wait(700);

        })

        it('Usabilities (Admin select item and click Left Arrow button. Data on the left side that was disabled will return to Enable as usual.', () => {

            cy.get('#access-management-collapse').click();
            cy.get('[href="/nt/access-management/super-admin/customer"]').click();
            cy.wait(2000);
            cy.contains('Setting Customer Permission Super Admin').click();
            cy.wait(300);
            cy.get('.pl-0 > .mt-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-body > table > .ant-table-tbody > \
                    [data-row-key="consent:get"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
                    
            cy.get('#rightToLeft').click();
            cy.get('[data-row-key="consent:get"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').should('be.enabled')

            cy.wait(700);

        })
    })
})