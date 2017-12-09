class BooksController < ApplicationController
    before_action :all_books, only: [:index, :create, :update, :destroy]
    respond_to :html, :js

    def index
        sort = params[:sort] || "id"
        # @books = Book.order("lower(#{sort})")
        @books = Book.find_by_sql("SELECT * FROM BOOKS ORDER BY #{sort} COLLATE NOCASE ASC")
    end

    def new
        @book = Book.new
    end

    def create
        @book = Book.new(book_params)
        @book.save
    end

    def edit
        @book = Book.find(params[:id])
        render 'new'
    end

    def update
        @book = Book.find(params[:id])
        @book.update(book_params)
        render 'create'
    end


    def destroy
        @book = Book.find(params[:id])
        @book.destroy
        render 'create'
    end

private
    def all_books
        @books = Book.all
    end

    def book_params
      params.require(:book).permit(:tomes_count, :author, :title, :genre, :publisher, :year, :price, :name, :comment)
    end
end