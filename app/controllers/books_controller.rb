class BooksController < ApplicationController
    def index
        @books = Book.all
        @book = Book.new
    end

    def new
        @book = Book.new
    end

    def create
        @book = Book.new(book_params)
        @book.save
        redirect_to books_path
    end

private
    def book_params
      params.require(:book).permit(:tomes_count, :author, :title, :genre, :publisher, :year, :price, :name, :comment)
    end
end